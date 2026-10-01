import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  HeadlessEditor,
  basicExtensions,
  placeholderExtension,
  imageExtension,
  type FileUploadHandler,
  type FileUploadRequest,
  type FileUploadProgress
} from '@syncfusion/ej2-headless-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.style.css'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef!: ElementRef<HTMLDivElement>;

  private editor!: HeadlessEditor;
  private currentUploadId: string | null = null;
  private selectedFile: File | null = null;
  private lastUploadedUrl: string | null = null;

  // UI state mirrors for the template.
  fileInfo = 'No file selected';
  progressWidth = '0%';
  progressText = '0%';
  progressState: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'idle';
  statusMessage = 'Idle. Click Select File to begin.';

  // Button state.
  uploadDisabled = true;
  insertDisabled = true;
  cancelDisabled = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.editor = HeadlessEditor.create({
      extensions: [basicExtensions, imageExtension, placeholderExtension]
    });

    this.editor.mount(this.editorRef.nativeElement);

    this.registerUploadHandler();
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  // ---------------------------------------------------------------------------
  // 1. Register the file upload handler before any file operation begins.
  // ---------------------------------------------------------------------------
  private registerUploadHandler(): void {
    const uploadHandler: FileUploadHandler = {
      upload: async (request: FileUploadRequest) => {
        const total: number = request.file.size;
        let loaded: number = 0;
        const chunkSize: number = Math.max(Math.ceil(total / 10), 1);

        while (loaded < total) {
          if (request.signal?.aborted) {
            throw new DOMException('Upload cancelled', 'AbortError');
          }

          await new Promise<void>((resolve: () => void) => {
            window.setTimeout(resolve, 100);
          });

          loaded = Math.min(loaded + chunkSize, total);

          const progress: FileUploadProgress = {
            loaded,
            total,
            percentage: total > 0 ? (loaded / total) * 100 : 100
          };

          request.onProgress?.(progress);
        }

        return {
          url: URL.createObjectURL(request.file),
          fileName: request.file.name,
          mimeType: request.file.type,
          size: request.file.size
        };
      },

      cancel: (uploadId: string): void => {
        this.setStatus(`Cancelling upload: ${uploadId}`);
      }
    };

    this.editor.setFileUploadHandler(uploadHandler);
  }

  // ---------------------------------------------------------------------------
  // 2. UI helpers.
  // ---------------------------------------------------------------------------
  private setStatus(message: string): void {
    this.statusMessage = message;
  }

  private setProgress(
    percentage: number,
    state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'
  ): void {
    const clamped: number = Math.max(0, Math.min(100, percentage));
    this.progressWidth = `${clamped}%`;
    this.progressText = `${clamped.toFixed(0)}%`;
    this.progressState = state;
  }

  private resetProgress(): void {
    this.progressWidth = '0%';
    this.progressText = '0%';
    this.progressState = 'idle';
  }

  private updateButtonStates(): void {
    this.uploadDisabled = !this.selectedFile || this.currentUploadId !== null;
    this.insertDisabled = !this.lastUploadedUrl;
    this.cancelDisabled =
      this.selectedFile === null && this.lastUploadedUrl === null;
  }

  private formatFileInfo(file: File): string {
    const kb: number = file.size / 1024;
    const sizeText: string =
      kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(2)} MB`;
    return `${file.name} (${sizeText})`;
  }

  // ---------------------------------------------------------------------------
  // 3. Select File button — opens the file picker.
  // ---------------------------------------------------------------------------
  onSelectFile(input: HTMLInputElement): void {
    input.value = '';
    input.click();
  }

  onFileSelected(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const file: File | undefined = input.files?.[0];
    if (!file) {
      return;
    }

    this.selectedFile = file;
    this.lastUploadedUrl = null;
    this.fileInfo = `Selected: ${this.formatFileInfo(file)}`;
    this.setStatus('File selected. Click Upload to start.');
    this.resetProgress();
    this.updateButtonStates();
  }

  // ---------------------------------------------------------------------------
  // 4. Upload button — starts the upload and reports progress.
  // ---------------------------------------------------------------------------
  onUpload(): void {
    if (!this.selectedFile) {
      return;
    }

    this.resetProgress();
    this.setStatus('Uploading...');
    this.currentUploadId = this.editor
      .getFileHandler()
      .startUpload(this.selectedFile);
    this.updateButtonStates();

    this.pollUploadState();
  }

  private pollUploadState(): void {
    if (!this.currentUploadId) {
      return;
    }

    const pending = this.editor
      .getFileHandler()
      .getPendingUpload(this.currentUploadId);
    if (!pending) {
      return;
    }

    if (pending.status === 'uploading' || pending.status === 'pending') {
      const pct: number = pending.progress?.percentage ?? 0;
      this.setProgress(pct, 'uploading');
      window.setTimeout(() => this.pollUploadState(), 100);
      return;
    }

    if (pending.status === 'completed') {
      this.setProgress(100, 'completed');
      this.lastUploadedUrl = pending.result?.url ?? null;
      this.setStatus(
        `Upload complete: ${pending.result?.fileName ?? this.selectedFile?.name ?? ''}`
      );
      this.currentUploadId = null;
      this.updateButtonStates();
      return;
    }

    if (pending.status === 'failed') {
      this.setProgress(0, 'failed');
      this.setStatus(
        `Upload failed: ${pending.error?.message ?? 'Unknown error'}`
      );
      this.currentUploadId = null;
      this.updateButtonStates();
      return;
    }

    if (pending.status === 'cancelled') {
      this.setProgress(0, 'cancelled');
      this.setStatus('Upload cancelled.');
      this.currentUploadId = null;
      this.updateButtonStates();
      return;
    }
  }

  // ---------------------------------------------------------------------------
  // 5. Cancel button — aborts the in-flight upload OR discards the completed
  //    upload so the user can pick a different file.
  // ---------------------------------------------------------------------------
  onCancel(): void {
    if (this.currentUploadId) {
      this.editor.getFileHandler().cancel(this.currentUploadId);
      this.setStatus('Cancellation requested...');
      return;
    }

    if (this.selectedFile || this.lastUploadedUrl) {
      this.discardSelection();
    }
  }

  private discardSelection(): void {
    this.selectedFile = null;
    this.lastUploadedUrl = null;
    this.currentUploadId = null;
    this.fileInfo = 'No file selected';
    this.resetProgress();
    this.setStatus('Discarded. Click Select File to choose another.');
    this.updateButtonStates();
  }

  // ---------------------------------------------------------------------------
  // 6. Insert button — places the uploaded file into the editor.
  // ---------------------------------------------------------------------------
  onInsert(): void {
    if (!this.lastUploadedUrl || !this.selectedFile) {
      return;
    }

    this.editor.commands.insertImage([
      {
        src: this.lastUploadedUrl,
        alt: this.selectedFile.name,
        display: 'block',
        align: 'none',
        wrap: 'none'
      }
    ]);

    this.setStatus(`Inserted "${this.selectedFile.name}" into the editor.`);
    window.setTimeout(() => this.resetForNextSelection(), 1200);
  }

  private resetForNextSelection(): void {
    this.selectedFile = null;
    this.lastUploadedUrl = null;
    this.fileInfo = 'No file selected';
    this.resetProgress();
    this.setStatus('Inserted. Click Select File to upload another.');
    this.updateButtonStates();
  }
}
