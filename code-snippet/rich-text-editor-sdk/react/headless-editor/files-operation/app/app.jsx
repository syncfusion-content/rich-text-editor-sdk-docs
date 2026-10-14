import * as React from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension, imageExtension } from '@syncfusion/ej2-headless-editor';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.fileInputRef = React.createRef();
        this.fileInfoRef = React.createRef();
        this.progressBarRef = React.createRef();
        this.progressTextRef = React.createRef();
        this.statusMessageRef = React.createRef();
        this.selectButtonRef = React.createRef();
        this.uploadButtonRef = React.createRef();
        this.insertButtonRef = React.createRef();
        this.cancelButtonRef = React.createRef();
        this.headlessEditor = null;
        this.selectedFile = null;
        this.currentUploadId = null;
        this.lastUploadedUrl = null;
        this.setStatus = this.setStatus.bind(this);
        this.updateButtonStates = this.updateButtonStates.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.setProgress = this.setProgress.bind(this);
        this.formatFileInfo = this.formatFileInfo.bind(this);
        this.handleSelectClick = this.handleSelectClick.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleUploadClick = this.handleUploadClick.bind(this);
        this.pollUploadState = this.pollUploadState.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.discardSelection = this.discardSelection.bind(this);
        this.handleInsertClick = this.handleInsertClick.bind(this);
        this.resetForNextSelection = this.resetForNextSelection.bind(this);
    }

    componentDidMount() {
        const headlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        this.headlessEditor = headlessEditor;
        if (this.editorRef.current) {
            headlessEditor.mount(this.editorRef.current);
        }
        const uploadHandler = {
            upload: async (request) => {
                const total = request.file.size;
                let loaded = 0;
                const chunkSize = Math.max(Math.ceil(total / 10), 1);
                while (loaded < total) {
                    if (request.signal && request.signal.aborted) {
                        throw new DOMException('Upload cancelled', 'AbortError');
                    }
                    await new Promise((resolve) => {
                        window.setTimeout(resolve, 100);
                    });
                    loaded = Math.min(loaded + chunkSize, total);
                    const progress = {
                        loaded: loaded,
                        total: total,
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
            cancel: (uploadId) => {
                this.setStatus(`Cancelling upload: ${uploadId}`);
            }
        };
        headlessEditor.setFileUploadHandler(uploadHandler);

        const selectButton = this.selectButtonRef.current;
        if (selectButton) {
            selectButton.addEventListener('click', this.handleSelectClick);
        }
        const fileInput = this.fileInputRef.current;
        if (fileInput) {
            fileInput.addEventListener('change', this.handleFileChange);
        }
        const uploadButton = this.uploadButtonRef.current;
        if (uploadButton) {
            uploadButton.addEventListener('click', this.handleUploadClick);
        }
        const cancelButton = this.cancelButtonRef.current;
        if (cancelButton) {
            cancelButton.addEventListener('click', this.handleCancelClick);
        }
        const insertButton = this.insertButtonRef.current;
        if (insertButton) {
            insertButton.addEventListener('click', this.handleInsertClick);
        }

        this.setStatus('Idle. Click Select File to begin.');
        this.updateButtonStates();
    }

    componentWillUnmount() {
        const selectButton = this.selectButtonRef.current;
        if (selectButton) {
            selectButton.removeEventListener('click', this.handleSelectClick);
        }
        const fileInput = this.fileInputRef.current;
        if (fileInput) {
            fileInput.removeEventListener('change', this.handleFileChange);
        }
        const uploadButton = this.uploadButtonRef.current;
        if (uploadButton) {
            uploadButton.removeEventListener('click', this.handleUploadClick);
        }
        const cancelButton = this.cancelButtonRef.current;
        if (cancelButton) {
            cancelButton.removeEventListener('click', this.handleCancelClick);
        }
        const insertButton = this.insertButtonRef.current;
        if (insertButton) {
            insertButton.removeEventListener('click', this.handleInsertClick);
        }
        if (this.headlessEditor) {
            this.headlessEditor.destroy();
            this.headlessEditor = null;
        }
    }

    setStatus(message) {
        if (this.statusMessageRef.current) {
            this.statusMessageRef.current.textContent = message;
        }
    }

    setProgress(percentage, state = 'uploading') {
        const clamped = Math.max(0, Math.min(100, percentage));
        if (this.progressBarRef.current) {
            this.progressBarRef.current.style.width = clamped + '%';
        }
        if (this.progressTextRef.current) {
            this.progressTextRef.current.textContent = clamped.toFixed(0) + '%';
        }
        if (this.progressBarRef.current) {
            this.progressBarRef.current.classList.remove('failed', 'cancelled', 'completed');
            if (state !== 'uploading' && state !== 'idle') {
                this.progressBarRef.current.classList.add(state);
            }
        }
    }

    resetProgress() {
        if (this.progressBarRef.current) {
            this.progressBarRef.current.style.width = '0%';
        }
        if (this.progressTextRef.current) {
            this.progressTextRef.current.textContent = '0%';
        }
        if (this.progressBarRef.current) {
            this.progressBarRef.current.classList.remove('failed', 'cancelled', 'completed');
        }
    }

    updateButtonStates() {
        if (this.uploadButtonRef.current) {
            this.uploadButtonRef.current.disabled = !this.selectedFile || this.currentUploadId !== null;
        }
        if (this.insertButtonRef.current) {
            this.insertButtonRef.current.disabled = !this.lastUploadedUrl;
        }
        if (this.cancelButtonRef.current) {
            this.cancelButtonRef.current.disabled = this.selectedFile === null && this.lastUploadedUrl === null;
        }
    }

    formatFileInfo(file) {
        const kb = file.size / 1024;
        const sizeText = kb < 1024
            ? (kb.toFixed(1) + ' KB')
            : ((kb / 1024).toFixed(2) + ' MB');
        return file.name + ' (' + sizeText + ')';
    }

    handleSelectClick() {
        if (this.fileInputRef.current) {
            this.fileInputRef.current.value = '';
            this.fileInputRef.current.click();
        }
    }

    handleFileChange() {
        const currentFileInput = this.fileInputRef.current;
        const files = currentFileInput ? currentFileInput.files : null;
        const file = files ? files[0] : undefined;
        if (!file) {
            return;
        }
        this.selectedFile = file;
        this.lastUploadedUrl = null;
        if (this.fileInfoRef.current) {
            this.fileInfoRef.current.textContent = 'Selected: ' + this.formatFileInfo(file);
        }
        this.setStatus('File selected. Click Upload to start.');
        this.resetProgress();
        this.updateButtonStates();
    }

    handleUploadClick() {
        if (!this.selectedFile || !this.headlessEditor) {
            return;
        }

        this.resetProgress();
        this.setStatus('Uploading...');
        this.currentUploadId = this.headlessEditor.getFileHandler().startUpload(this.selectedFile);
        this.updateButtonStates();

        this.pollUploadState();
    }

    pollUploadState() {
        if (!this.currentUploadId || !this.headlessEditor) {
            return;
        }
        const pending = this.headlessEditor.getFileHandler().getPendingUpload(this.currentUploadId);
        if (!pending) {
            return;
        }

        if (pending.status === 'uploading' || pending.status === 'pending') {
            const progressInfo = pending.progress;
            const pct = progressInfo ? (progressInfo.percentage || 0) : 0;
            this.setProgress(pct, 'uploading');
            const self = this;
            window.setTimeout(function () { self.pollUploadState(); }, 100);
            return;
        }

        if (pending.status === 'completed') {
            this.setProgress(100, 'completed');
            const completedResult = pending.result;
            this.lastUploadedUrl = completedResult ? (completedResult.url || null) : null;
            const completedFileName = completedResult ? completedResult.fileName : '';
            const selectedFileName = this.selectedFile ? this.selectedFile.name : '';
            this.setStatus('Upload complete: ' + (completedFileName || selectedFileName || ''));
            this.currentUploadId = null;
            this.updateButtonStates();
            return;
        }

        if (pending.status === 'failed') {
            this.setProgress(0, 'failed');
            const failedError = pending.error;
            const failedMessage = failedError ? (failedError.message || 'Unknown error') : 'Unknown error';
            this.setStatus('Upload failed: ' + failedMessage);
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

    handleCancelClick() {
        if (this.currentUploadId && this.headlessEditor) {
            this.headlessEditor.getFileHandler().cancel(this.currentUploadId);
            this.setStatus('Cancellation requested...');
            return;
        }

        if (this.selectedFile || this.lastUploadedUrl) {
            this.discardSelection();
        }
    }

    discardSelection() {
        this.selectedFile = null;
        this.lastUploadedUrl = null;
        this.currentUploadId = null;
        if (this.fileInputRef.current) {
            this.fileInputRef.current.value = '';
        }
        if (this.fileInfoRef.current) {
            this.fileInfoRef.current.textContent = 'No file selected';
        }
        this.resetProgress();
        this.setStatus('Discarded. Click Select File to choose another.');
        this.updateButtonStates();
    }

    handleInsertClick() {
        if (!this.lastUploadedUrl || !this.selectedFile || !this.headlessEditor) {
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

        this.setStatus('Inserted "' + this.selectedFile.name + '" into the editor.');

        const self = this;
        window.setTimeout(function () { self.resetForNextSelection(); }, 1200);
    }

    resetForNextSelection() {
        this.selectedFile = null;
        this.lastUploadedUrl = null;
        if (this.fileInputRef.current) {
            this.fileInputRef.current.value = '';
        }
        if (this.fileInfoRef.current) {
            this.fileInfoRef.current.textContent = 'No file selected';
        }
        this.resetProgress();
        this.setStatus('Inserted. Click Select File to upload another.');
        this.updateButtonStates();
    }

    render() {
        return (
            <div className="control-section">
                <div className="file-ops-panel">
                    <div className="file-ops-row">
                        <button id="select-button" type="button" className="e-btn e-outline" ref={this.selectButtonRef}>Select File</button>
                        <span id="file-info" className="file-ops-info" ref={this.fileInfoRef}>No file selected</span>
                        <input id="file-input" type="file" accept="image/*" style={{ display: 'none' }} ref={this.fileInputRef} />
                    </div>
                    <div className="file-ops-row">
                        <button id="upload-button" type="button" className="e-btn e-outline" disabled ref={this.uploadButtonRef}>Upload</button>
                        <button id="insert-button" type="button" className="e-btn e-outline" disabled ref={this.insertButtonRef}>Insert</button>
                        <button id="cancel-button" type="button" className="e-btn e-outline" disabled ref={this.cancelButtonRef}>Cancel</button>
                    </div>
                    <div className="file-ops-row">
                        <div className="file-ops-progress-track">
                            <div id="progress-bar" className="file-ops-progress-bar" ref={this.progressBarRef}></div>
                        </div>
                        <span id="progress-text" className="file-ops-info" ref={this.progressTextRef}>0%</span>
                    </div>
                    <div id="status-message" className="file-ops-status" ref={this.statusMessageRef}>Idle</div>
                </div>

                <div className="headless-editor-surface">
                    <div id="headless-editor" ref={this.editorRef}></div>
                </div>
            </div>
        );
    }
}
export default App;