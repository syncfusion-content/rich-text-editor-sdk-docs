import * as React from 'react';
import { useEffect, useRef } from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension, imageExtension } from '@syncfusion/ej2-headless-editor';
function App() {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const fileInfoRef = useRef(null);
    const progressBarRef = useRef(null);
    const progressTextRef = useRef(null);
    const statusMessageRef = useRef(null);
    const selectButtonRef = useRef(null);
    const uploadButtonRef = useRef(null);
    const insertButtonRef = useRef(null);
    const cancelButtonRef = useRef(null);
    useEffect(() => {
        const headlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        if (editorRef.current) {
            headlessEditor.mount(editorRef.current);
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
            cancel: (uploadId) => {
                setStatus(`Cancelling upload: ${uploadId}`);
            }
        };
        headlessEditor.setFileUploadHandler(uploadHandler);
        let selectedFile = null;
        let currentUploadId = null;
        let lastUploadedUrl = null;
        function setStatus(message) {
            if (statusMessageRef.current) {
                statusMessageRef.current.textContent = message;
            }
        }
        function setProgress(percentage, state = 'uploading') {
            const clamped = Math.max(0, Math.min(100, percentage));
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${clamped}%`;
            }
            if (progressTextRef.current) {
                progressTextRef.current.textContent = `${clamped.toFixed(0)}%`;
            }
            if (progressBarRef.current) {
                progressBarRef.current.classList.remove('failed', 'cancelled', 'completed');
                if (state !== 'uploading' && state !== 'idle') {
                    progressBarRef.current.classList.add(state);
                }
            }
        }
        function resetProgress() {
            if (progressBarRef.current) {
                progressBarRef.current.style.width = '0%';
            }
            if (progressTextRef.current) {
                progressTextRef.current.textContent = '0%';
            }
            if (progressBarRef.current) {
                progressBarRef.current.classList.remove('failed', 'cancelled', 'completed');
            }
        }
        function updateButtonStates() {
            if (uploadButtonRef.current) {
                uploadButtonRef.current.disabled = !selectedFile || currentUploadId !== null;
            }
            if (insertButtonRef.current) {
                insertButtonRef.current.disabled = !lastUploadedUrl;
            }
            if (cancelButtonRef.current) {
                cancelButtonRef.current.disabled = selectedFile === null && lastUploadedUrl === null;
            }
        }
        function formatFileInfo(file) {
            const kb = file.size / 1024;
            const sizeText = kb < 1024
                ? `${kb.toFixed(1)} KB`
                : `${(kb / 1024).toFixed(2)} MB`;
            return `${file.name} (${sizeText})`;
        }
        function handleSelectClick() {
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
                fileInputRef.current.click();
            }
        }
        function handleFileChange() {
            const currentFileInput = fileInputRef.current;
            const files = currentFileInput ? currentFileInput.files : null;
            const file = files ? files[0] : undefined;
            if (!file) {
                return;
            }
            selectedFile = file;
            lastUploadedUrl = null;
            if (fileInfoRef.current) {
                fileInfoRef.current.textContent = `Selected: ${formatFileInfo(file)}`;
            }
            setStatus('File selected. Click Upload to start.');
            resetProgress();
            updateButtonStates();
        }
        function handleUploadClick() {
            if (!selectedFile) {
                return;
            }
            resetProgress();
            setStatus('Uploading...');
            currentUploadId = headlessEditor.getFileHandler().startUpload(selectedFile);
            updateButtonStates();
            pollUploadState();
        }
        function pollUploadState() {
            if (!currentUploadId) {
                return;
            }
            const pending = headlessEditor.getFileHandler().getPendingUpload(currentUploadId);
            if (!pending) {
                return;
            }
            if (pending.status === 'uploading' || pending.status === 'pending') {
                const progressInfo = pending.progress;
                const pct = progressInfo ? (progressInfo.percentage || 0) : 0;
                setProgress(pct, 'uploading');
                window.setTimeout(pollUploadState, 100);
                return;
            }
            if (pending.status === 'completed') {
                setProgress(100, 'completed');
                const completedResult = pending.result;
                lastUploadedUrl = completedResult ? (completedResult.url || null) : null;
                const completedFileName = completedResult ? completedResult.fileName : '';
                const selectedFileName = selectedFile ? selectedFile.name : '';
                setStatus(`Upload complete: ${completedFileName || selectedFileName || ''}`);
                currentUploadId = null;
                updateButtonStates();
                return;
            }
            if (pending.status === 'failed') {
                setProgress(0, 'failed');
                const failedError = pending.error;
                const failedMessage = failedError ? (failedError.message || 'Unknown error') : 'Unknown error';
                setStatus(`Upload failed: ${failedMessage}`);
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
        function handleCancelClick() {
            if (currentUploadId) {
                headlessEditor.getFileHandler().cancel(currentUploadId);
                setStatus('Cancellation requested...');
                return;
            }
            if (selectedFile || lastUploadedUrl) {
                discardSelection();
            }
        }
        function discardSelection() {
            selectedFile = null;
            lastUploadedUrl = null;
            currentUploadId = null;
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            if (fileInfoRef.current) {
                fileInfoRef.current.textContent = 'No file selected';
            }
            resetProgress();
            setStatus('Discarded. Click Select File to choose another.');
            updateButtonStates();
        }
        function handleInsertClick() {
            if (!lastUploadedUrl || !selectedFile) {
                return;
            }
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
            window.setTimeout(resetForNextSelection, 1200);
        }
        function resetForNextSelection() {
            selectedFile = null;
            lastUploadedUrl = null;
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            if (fileInfoRef.current) {
                fileInfoRef.current.textContent = 'No file selected';
            }
            resetProgress();
            setStatus('Inserted. Click Select File to upload another.');
            updateButtonStates();
        }
        if (selectButtonRef.current) {
            selectButtonRef.current.addEventListener('click', handleSelectClick);
        }
        if (fileInputRef.current) {
            fileInputRef.current.addEventListener('change', handleFileChange);
        }
        if (uploadButtonRef.current) {
            uploadButtonRef.current.addEventListener('click', handleUploadClick);
        }
        if (cancelButtonRef.current) {
            cancelButtonRef.current.addEventListener('click', handleCancelClick);
        }
        if (insertButtonRef.current) {
            insertButtonRef.current.addEventListener('click', handleInsertClick);
        }
        setStatus('Idle. Click Select File to begin.');
        updateButtonStates();
        return () => {
            if (selectButtonRef.current) {
                selectButtonRef.current.removeEventListener('click', handleSelectClick);
            }
            if (fileInputRef.current) {
                fileInputRef.current.removeEventListener('change', handleFileChange);
            }
            if (uploadButtonRef.current) {
                uploadButtonRef.current.removeEventListener('click', handleUploadClick);
            }
            if (cancelButtonRef.current) {
                cancelButtonRef.current.removeEventListener('click', handleCancelClick);
            }
            if (insertButtonRef.current) {
                insertButtonRef.current.removeEventListener('click', handleInsertClick);
            }
            headlessEditor.destroy();
        };
    }, []);
    return (
        <div className="control-section">
            <div className="file-ops-panel">
                <div className="file-ops-row">
                    <button id="select-button" type="button" className="e-btn e-outline" ref={selectButtonRef}>Select File</button>
                    <span id="file-info" className="file-ops-info" ref={fileInfoRef}>No file selected</span>
                    <input id="file-input" type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} />
                </div>
                <div className="file-ops-row">
                    <button id="upload-button" type="button" className="e-btn e-outline" disabled ref={uploadButtonRef}>Upload</button>
                    <button id="insert-button" type="button" className="e-btn e-outline" disabled ref={insertButtonRef}>Insert</button>
                    <button id="cancel-button" type="button" className="e-btn e-outline" disabled ref={cancelButtonRef}>Cancel</button>
                </div>
                <div className="file-ops-row">
                    <div className="file-ops-progress-track">
                        <div id="progress-bar" className="file-ops-progress-bar" ref={progressBarRef}></div>
                    </div>
                    <span id="progress-text" className="file-ops-info" ref={progressTextRef}>0%</span>
                </div>
                <div id="status-message" className="file-ops-status" ref={statusMessageRef}>Idle</div>
            </div>
            <div className="headless-editor-surface">
                <div id="headless-editor" ref={editorRef}></div>
            </div>
        </div>
    );
}
export default App;