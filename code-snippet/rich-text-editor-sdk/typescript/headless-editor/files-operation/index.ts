import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension,
    imageExtension
} from '@syncfusion/ej2-headless-editor';

import type {
    FileUploadHandler,
    FileUploadRequest,
    FileUploadProgress
} from '@syncfusion/ej2-headless-editor';

import './index.css';

// -----------------------------------------------------------------------------
// 1. Create the editor.
// -----------------------------------------------------------------------------
const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, imageExtension, placeholderExtension]
});

const container: HTMLElement | null = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}

// -----------------------------------------------------------------------------
// 2. Register the file upload handler before any file operation begins.
// -----------------------------------------------------------------------------
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
        setStatus(`Cancelling upload: ${uploadId}`);
    }
};

headlessEditor.setFileUploadHandler(uploadHandler);

// -----------------------------------------------------------------------------
// 3. UI references.
// -----------------------------------------------------------------------------
const fileInput: HTMLInputElement =
    document.getElementById('file-input') as HTMLInputElement;
const fileInfo: HTMLElement =
    document.getElementById('file-info') as HTMLElement;
const progressBar: HTMLElement =
    document.getElementById('progress-bar') as HTMLElement;
const progressText: HTMLElement =
    document.getElementById('progress-text') as HTMLElement;
const statusMessage: HTMLElement =
    document.getElementById('status-message') as HTMLElement;

const selectButton: HTMLButtonElement =
    document.getElementById('select-button') as HTMLButtonElement;
const uploadButton: HTMLButtonElement =
    document.getElementById('upload-button') as HTMLButtonElement;
const insertButton: HTMLButtonElement =
    document.getElementById('insert-button') as HTMLButtonElement;
const cancelButton: HTMLButtonElement =
    document.getElementById('cancel-button') as HTMLButtonElement;

// -----------------------------------------------------------------------------
// 4. State and helpers.
// -----------------------------------------------------------------------------
let selectedFile: File | null = null;
let currentUploadId: string | null = null;
let lastUploadedUrl: string | null = null;

function setStatus(message: string): void {
    statusMessage.textContent = message;
}

function setProgress(percentage: number, state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'): void {
    const clamped: number = Math.max(0, Math.min(100, percentage));
    progressBar.style.width = `${clamped}%`;
    progressText.textContent = `${clamped.toFixed(0)}%`;
    progressBar.classList.remove('failed', 'cancelled', 'completed');
    if (state !== 'uploading' && state !== 'idle') {
        progressBar.classList.add(state);
    }
}

function resetProgress(): void {
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressBar.classList.remove('failed', 'cancelled', 'completed');
}

function updateButtonStates(): void {
    // Upload is enabled once a file is selected and no upload is currently running.
    uploadButton.disabled = !selectedFile || currentUploadId !== null;
    // Insert is enabled once an upload has completed successfully.
    insertButton.disabled = !lastUploadedUrl;
    // Cancel is enabled from selection through completion — it means
    // 'abort the in-flight upload' while uploading, and 'discard the
    // completed result' after upload. It is disabled only when there
    // is nothing to cancel or discard.
    cancelButton.disabled = selectedFile === null && lastUploadedUrl === null;
}

function formatFileInfo(file: File): string {
    const kb: number = file.size / 1024;
    const sizeText: string = kb < 1024
        ? `${kb.toFixed(1)} KB`
        : `${(kb / 1024).toFixed(2)} MB`;
    return `${file.name} (${sizeText})`;
}

// -----------------------------------------------------------------------------
// 5. Select File button — opens the file picker.
// -----------------------------------------------------------------------------
selectButton.addEventListener('click', (): void => {
    fileInput.value = '';
    fileInput.click();
});

fileInput.addEventListener('change', (): void => {
    const file: File | undefined = fileInput.files?.[0];
    if (!file) {
        return;
    }

    selectedFile = file;
    lastUploadedUrl = null;
    fileInfo.textContent = `Selected: ${formatFileInfo(file)}`;
    setStatus('File selected. Click Upload to start.');
    resetProgress();
    updateButtonStates();
});

// -----------------------------------------------------------------------------
// 6. Upload button — starts the upload and reports progress.
// -----------------------------------------------------------------------------
uploadButton.addEventListener('click', (): void => {
    if (!selectedFile) {
        return;
    }

    resetProgress();
    setStatus('Uploading...');
    currentUploadId = headlessEditor.getFileHandler().startUpload(selectedFile);
    updateButtonStates();

    pollUploadState();
});

function pollUploadState(): void {
    if (!currentUploadId) {
        return;
    }
    const pending = headlessEditor.getFileHandler().getPendingUpload(currentUploadId);
    if (!pending) {
        return;
    }

    if (pending.status === 'uploading' || pending.status === 'pending') {
        const pct: number = pending.progress?.percentage ?? 0;
        setProgress(pct, 'uploading');
        window.setTimeout(pollUploadState, 100);
        return;
    }

    if (pending.status === 'completed') {
        setProgress(100, 'completed');
        lastUploadedUrl = pending.result?.url ?? null;
        setStatus(`Upload complete: ${pending.result?.fileName ?? selectedFile?.name ?? ''}`);
        currentUploadId = null;
        updateButtonStates();
        return;
    }

    if (pending.status === 'failed') {
        setProgress(0, 'failed');
        setStatus(`Upload failed: ${pending.error?.message ?? 'Unknown error'}`);
        currentUploadId = null;
        updateButtonStates();
        return;
    }

    if (pending.status === 'cancelled') {
        setProgress(0, 'cancelled');
        setStatus('Upload cancelled.');
        currentUploadId = null;
        updateButtonStates();
        return;
    }
}

// -----------------------------------------------------------------------------
// 7. Cancel button — aborts the in-flight upload via AbortSignal, OR
//    discards the completed upload so the user can pick a different file.
// -----------------------------------------------------------------------------
cancelButton.addEventListener('click', (): void => {
    // Case A: an upload is in flight — abort it via the AbortSignal.
    if (currentUploadId) {
        headlessEditor.getFileHandler().cancel(currentUploadId);
        setStatus('Cancellation requested...');
        return;
    }

    // Case B: an upload already completed (or failed/cancelled) and the
    // result has not been inserted yet — discard the result and reset
    // the panel so the user can choose a different file.
    if (selectedFile || lastUploadedUrl) {
        discardSelection();
    }
});

function discardSelection(): void {
    selectedFile = null;
    lastUploadedUrl = null;
    currentUploadId = null;
    fileInput.value = '';
    fileInfo.textContent = 'No file selected';
    resetProgress();
    setStatus('Discarded. Click Select File to choose another.');
    updateButtonStates();
}

// -----------------------------------------------------------------------------
// 8. Insert button — places the uploaded file into the editor.
// -----------------------------------------------------------------------------
insertButton.addEventListener('click', (): void => {
    if (!lastUploadedUrl || !selectedFile) {
        return;
    }

    // Insert the uploaded URL as an image node so the result is visible
    // to the customer immediately after the file operation completes.
    headlessEditor.commands.insertImage([
        {
            src: lastUploadedUrl,
            alt: selectedFile.name,
            display: 'block',
            align: 'none',
            wrap: 'none'
        }
    ]);

    setStatus(`Inserted "${selectedFile.name}" into the editor.`);

    // Briefly hold the 100% state so the user can see the upload completed,
    // then clear the panel so the next file selection starts fresh.
    window.setTimeout(resetForNextSelection, 1200);
});

function resetForNextSelection(): void {
    selectedFile = null;
    lastUploadedUrl = null;
    fileInput.value = '';
    fileInfo.textContent = 'No file selected';
    resetProgress();
    setStatus('Inserted. Click Select File to upload another.');
    updateButtonStates();
}

// Initial UI state.
setStatus('Idle. Click Select File to begin.');
updateButtonStates();