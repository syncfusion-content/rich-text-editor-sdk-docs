import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension,
    imageExtension
} from '@syncfusion/ej2-headless-editor';
import './index.css';

export default class App extends React.Component {
    private editorRef: HTMLDivElement | null = null;
    private fileInputRef: HTMLInputElement | null = null;
    private fileInfoRef: HTMLSpanElement | null = null;
    private progressBarRef: HTMLDivElement | null = null;
    private progressTextRef: HTMLSpanElement | null = null;
    private statusMessageRef: HTMLDivElement | null = null;
    private selectButtonRef: HTMLButtonElement | null = null;
    private uploadButtonRef: HTMLButtonElement | null = null;
    private insertButtonRef: HTMLButtonElement | null = null;
    private cancelButtonRef: HTMLButtonElement | null = null;
    private headlessEditor: any = null;
    private selectedFile: File | null = null;
    private currentUploadId: string | null = null;
    private lastUploadedUrl: string | null = null;

    setStatus = (message: string) => {
        if (this.statusMessageRef) {
            this.statusMessageRef.textContent = message;
        }
    };

    setProgress = (percentage: number, state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading') => {
        const clamped: number = Math.max(0, Math.min(100, percentage));
        if (this.progressBarRef) {
            this.progressBarRef.style.width = `${clamped}%`;
        }
        if (this.progressTextRef) {
            this.progressTextRef.textContent = `${clamped.toFixed(0)}%`;
        }
        if (this.progressBarRef) {
            this.progressBarRef.classList.remove('failed', 'cancelled', 'completed');
            if (state !== 'uploading' && state !== 'idle') {
                this.progressBarRef.classList.add(state);
            }
        }
    };

    resetProgress = () => {
        if (this.progressBarRef) {
            this.progressBarRef.style.width = '0%';
        }
        if (this.progressTextRef) {
            this.progressTextRef.textContent = '0%';
        }
        if (this.progressBarRef) {
            this.progressBarRef.classList.remove('failed', 'cancelled', 'completed');
        }
    };

    updateButtonStates = () => {
        if (this.uploadButtonRef) {
            this.uploadButtonRef.disabled = !this.selectedFile || this.currentUploadId !== null;
        }
        if (this.insertButtonRef) {
            this.insertButtonRef.disabled = !this.lastUploadedUrl;
        }
        if (this.cancelButtonRef) {
            this.cancelButtonRef.disabled = this.selectedFile === null && this.lastUploadedUrl === null;
        }
    };

    formatFileInfo = (file: File): string => {
        const kb: number = file.size / 1024;
        const sizeText: string = kb < 1024
            ? `${kb.toFixed(1)} KB`
            : `${(kb / 1024).toFixed(2)} MB`;
        return `${file.name} (${sizeText})`;
    };

    handleSelectClick = () => {
        if (this.fileInputRef) {
            this.fileInputRef.value = '';
            this.fileInputRef.click();
        }
    };

    handleFileChange = () => {
        const currentFileInput = this.fileInputRef;
        const files = currentFileInput ? currentFileInput.files : null;
        const file: File | undefined = files ? files[0] : undefined;
        if (!file) {
            return;
        }
        this.selectedFile = file;
        this.lastUploadedUrl = null;
        if (this.fileInfoRef) {
            this.fileInfoRef.textContent = `Selected: ${this.formatFileInfo(file)}`;
        }
        this.setStatus('File selected. Click Upload to start.');
        this.resetProgress();
        this.updateButtonStates();
    };

    pollUploadState = () => {
        if (!this.currentUploadId) {
            return;
        }
        const pending = this.headlessEditor.getFileHandler().getPendingUpload(this.currentUploadId);
        if (!pending) {
            return;
        }

        if (pending.status === 'uploading' || pending.status === 'pending') {
            const progressInfo = pending.progress;
            const pct: number = progressInfo ? (progressInfo.percentage || 0) : 0;
            this.setProgress(pct, 'uploading');
            window.setTimeout(this.pollUploadState, 100);
            return;
        }

        if (pending.status === 'completed') {
            this.setProgress(100, 'completed');
            const completedResult = pending.result;
            this.lastUploadedUrl = completedResult ? (completedResult.url || null) : null;
            const completedFileName = completedResult ? completedResult.fileName : '';
            const selectedFileName = this.selectedFile ? this.selectedFile.name : '';
            this.setStatus(`Upload complete: ${completedFileName || selectedFileName || ''}`);
            this.currentUploadId = null;
            this.updateButtonStates();
            return;
        }

        if (pending.status === 'failed') {
            this.setProgress(0, 'failed');
            const failedError = pending.error;
            const failedMessage = failedError ? (failedError.message || 'Unknown error') : 'Unknown error';
            this.setStatus(`Upload failed: ${failedMessage}`);
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
    };

    handleUploadClick = () => {
        if (!this.selectedFile) {
            return;
        }

        this.resetProgress();
        this.setStatus('Uploading...');
        this.currentUploadId = this.headlessEditor.getFileHandler().startUpload(this.selectedFile);
        this.updateButtonStates();

        this.pollUploadState();
    };

    handleCancelClick = () => {
        if (this.currentUploadId) {
            this.headlessEditor.getFileHandler().cancel(this.currentUploadId);
            this.setStatus('Cancellation requested...');
            return;
        }

        if (this.selectedFile || this.lastUploadedUrl) {
            this.discardSelection();
        }
    };

    discardSelection = () => {
        this.selectedFile = null;
        this.lastUploadedUrl = null;
        this.currentUploadId = null;
        if (this.fileInputRef) {
            this.fileInputRef.value = '';
        }
        if (this.fileInfoRef) {
            this.fileInfoRef.textContent = 'No file selected';
        }
        this.resetProgress();
        this.setStatus('Discarded. Click Select File to choose another.');
        this.updateButtonStates();
    };

    handleInsertClick = () => {
        if (!this.lastUploadedUrl || !this.selectedFile) {
            return;
        }

        this.headlessEditor.commands.insertImage([
            {
                src: this.lastUploadedUrl,
                alt: this.selectedFile.name,
                display: 'block',
                align: 'none',
                wrap: 'none'
            }
        ]);

        this.setStatus(`Inserted "${this.selectedFile.name}" into the editor.`);

        window.setTimeout(this.resetForNextSelection, 1200);
    };

    resetForNextSelection = () => {
        this.selectedFile = null;
        this.lastUploadedUrl = null;
        if (this.fileInputRef) {
            this.fileInputRef.value = '';
        }
        if (this.fileInfoRef) {
            this.fileInfoRef.textContent = 'No file selected';
        }
        this.resetProgress();
        this.setStatus('Inserted. Click Select File to upload another.');
        this.updateButtonStates();
    };

    registerUploadHandler = () => {
        if (!this.headlessEditor) {
            return;
        }
        const uploadHandler = {
            upload: async (request: any) => {
                const total: number = request.file.size;
                let loaded: number = 0;
                const chunkSize: number = Math.max(Math.ceil(total / 10), 1);

                while (loaded < total) {
                    if (request.signal && request.signal.aborted) {
                        throw new DOMException('Upload cancelled', 'AbortError');
                    }
                    await new Promise<void>((resolve: () => void) => {
                        window.setTimeout(resolve, 100);
                    });
                    loaded = Math.min(loaded + chunkSize, total);
                    const progress = {
                        loaded,
                        total,
                        percentage: total > 0 ? (loaded / total) * 100 : 100
                    };
                    if (request.onProgress) {
                        request.onProgress(progress);
                    }
                }
                return {
                    url: URL.createObjectURL(request.file),
                    fileName: request.file.name,
                    mimeType: request.file.type,
                    size: request.file.size
                };
            },
            cancel: (uploadId: string) => {
                this.setStatus(`Cancelling upload: ${uploadId}`);
            }
        };
        this.headlessEditor.setFileUploadHandler(uploadHandler);
    };

    componentDidMount() {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        this.headlessEditor = editor;
        if (this.editorRef) {
            editor.mount(this.editorRef);
        }
        this.registerUploadHandler();

        if (this.selectButtonRef) {
            this.selectButtonRef.addEventListener('click', this.handleSelectClick);
        }
        if (this.fileInputRef) {
            this.fileInputRef.addEventListener('change', this.handleFileChange);
        }
        if (this.uploadButtonRef) {
            this.uploadButtonRef.addEventListener('click', this.handleUploadClick);
        }
        if (this.cancelButtonRef) {
            this.cancelButtonRef.addEventListener('click', this.handleCancelClick);
        }
        if (this.insertButtonRef) {
            this.insertButtonRef.addEventListener('click', this.handleInsertClick);
        }

        this.setStatus('Idle. Click Select File to begin.');
        this.updateButtonStates();
    }

    componentWillUnmount() {
        if (this.selectButtonRef) {
            this.selectButtonRef.removeEventListener('click', this.handleSelectClick);
        }
        if (this.fileInputRef) {
            this.fileInputRef.removeEventListener('change', this.handleFileChange);
        }
        if (this.uploadButtonRef) {
            this.uploadButtonRef.removeEventListener('click', this.handleUploadClick);
        }
        if (this.cancelButtonRef) {
            this.cancelButtonRef.removeEventListener('click', this.handleCancelClick);
        }
        if (this.insertButtonRef) {
            this.insertButtonRef.removeEventListener('click', this.handleInsertClick);
        }
        if (this.headlessEditor) {
            this.headlessEditor.destroy();
            this.headlessEditor = null;
        }
    }

    render() {
        return (
            <div className="control-section">
                <div className="file-ops-panel">
                    <div className="file-ops-row">
                        <button id="select-button" type="button" className="e-btn e-outline" ref={(el) => { this.selectButtonRef = el; }}>Select File</button>
                        <span id="file-info" className="file-ops-info" ref={(el) => { this.fileInfoRef = el; }}>No file selected</span>
                        <input id="file-input" type="file" accept="image/*" style={{ display: 'none' }} ref={(el) => { this.fileInputRef = el; }} />
                    </div>
                    <div className="file-ops-row">
                        <button id="upload-button" type="button" className="e-btn e-outline" disabled ref={(el) => { this.uploadButtonRef = el; }}>Upload</button>
                        <button id="insert-button" type="button" className="e-btn e-outline" disabled ref={(el) => { this.insertButtonRef = el; }}>Insert</button>
                        <button id="cancel-button" type="button" className="e-btn e-outline" disabled ref={(el) => { this.cancelButtonRef = el; }}>Cancel</button>
                    </div>
                    <div className="file-ops-row">
                        <div className="file-ops-progress-track">
                            <div id="progress-bar" className="file-ops-progress-bar" ref={(el) => { this.progressBarRef = el; }}></div>
                        </div>
                        <span id="progress-text" className="file-ops-info" ref={(el) => { this.progressTextRef = el; }}>0%</span>
                    </div>
                    <div id="status-message" className="file-ops-status" ref={(el) => { this.statusMessageRef = el; }}>Idle</div>
                </div>

                <div className="headless-editor-surface">
                    <div id="headless-editor" ref={(el) => { this.editorRef = el; }}></div>
                </div>
            </div>
        );
    }
}
