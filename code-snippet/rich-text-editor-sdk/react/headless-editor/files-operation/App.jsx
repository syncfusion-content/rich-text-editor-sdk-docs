import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension,
    imageExtension
} from '@syncfusion/ej2-headless-editor';

import './index.css';

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
        // -------------------------------------------------------------------------
        // 1. Create the editor.
        // -------------------------------------------------------------------------
        const headlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });

        if (editorRef.current) {
            headlessEditor.mount(editorRef.current);
        }

        // -------------------------------------------------------------------------
        // 2. Register the file upload handler before any file operation begins.
        // -------------------------------------------------------------------------
        const uploadHandler = {
            upload: async (request) => {
                const total = request.file.size;
                let loaded = 0;
                const chunkSize = Math.max(Math.ceil(total / 10), 1);

                while (loaded < total) {
                    if (request.signal?.aborted) {
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

                    request.onProgress?.(progress);
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

        // -------------------------------------------------------------------------
        // 3. State and helpers.
        // -------------------------------------------------------------------------
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

        // -------------------------------------------------------------------------
        // 4. Select File button — opens the file picker.
        // -------------------------------------------------------------------------
        function handleSelectClick() {
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
                fileInputRef.current.click();
            }
        }

        function handleFileChange() {
            const file = fileInputRef.current?.files?.[0];
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

        // -------------------------------------------------------------------------
        // 5. Upload button — starts the upload and reports progress.
        // -------------------------------------------------------------------------
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
                const pct = pending.progress?.percentage ?? 0;
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

        // -------------------------------------------------------------------------
        // 6. Cancel button — aborts the in-flight upload via AbortSignal, OR
        //    discards the completed upload so the user can pick a different file.
        // -------------------------------------------------------------------------
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

        // -------------------------------------------------------------------------
        // 7. Insert button — places the uploaded file into the editor.
        // -------------------------------------------------------------------------
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

        // -------------------------------------------------------------------------
        // 8. Wire up event listeners and initialize the UI.
        // -------------------------------------------------------------------------
        selectButtonRef.current?.addEventListener('click', handleSelectClick);
        fileInputRef.current?.addEventListener('change', handleFileChange);
        uploadButtonRef.current?.addEventListener('click', handleUploadClick);
        cancelButtonRef.current?.addEventListener('click', handleCancelClick);
        insertButtonRef.current?.addEventListener('click', handleInsertClick);

        setStatus('Idle. Click Select File to begin.');
        updateButtonStates();

        return () => {
            selectButtonRef.current?.removeEventListener('click', handleSelectClick);
            fileInputRef.current?.removeEventListener('change', handleFileChange);
            uploadButtonRef.current?.removeEventListener('click', handleUploadClick);
            cancelButtonRef.current?.removeEventListener('click', handleCancelClick);
            insertButtonRef.current?.removeEventListener('click', handleInsertClick);
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

ReactDOM.render(<App />, document.getElementById('container'));