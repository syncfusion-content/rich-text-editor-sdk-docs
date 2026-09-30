import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import {HeadlessEditor,basicExtensions,placeholderExtension,imageExtension} from '@syncfusion/ej2-headless-editor';
import type {FileUploadHandler,FileUploadRequest,FileUploadProgress} from '@syncfusion/ej2-headless-editor';
import './index.css';
function App() {
    const editorRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const fileInfoRef = useRef<HTMLSpanElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressTextRef = useRef<HTMLSpanElement>(null);
    const statusMessageRef = useRef<HTMLDivElement>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);
    const uploadButtonRef = useRef<HTMLButtonElement>(null);
    const insertButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const headlessEditor: HeadlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        if (editorRef.current) {
            headlessEditor.mount(editorRef.current);
        }
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
        let selectedFile: File | null = null;
        let currentUploadId: string | null = null;
        let lastUploadedUrl: string | null = null;
        function setStatus(message: string): void {
            if (statusMessageRef.current) {
                statusMessageRef.current.textContent = message;
            }
        }
        function setProgress(percentage: number, state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'): void {
            const clamped: number = Math.max(0, Math.min(100, percentage));
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
        function resetProgress(): void {
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
        function updateButtonStates(): void {
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
        function formatFileInfo(file: File): string {
            const kb: number = file.size / 1024;
            const sizeText: string = kb < 1024
                ? `${kb.toFixed(1)} KB`
                : `${(kb / 1024).toFixed(2)} MB`;
            return `${file.name} (${sizeText})`;
        }
        function handleSelectClick(): void {
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
                fileInputRef.current.click();
            }
        }
        function handleFileChange(): void {
            const file: File | undefined = fileInputRef.current?.files?.[0];
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
        function handleUploadClick(): void {
            if (!selectedFile) {
                return;
            }

            resetProgress();
            setStatus('Uploading...');
            currentUploadId = headlessEditor.getFileHandler().startUpload(selectedFile);
            updateButtonStates();

            pollUploadState();
        }

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

        // -------------------------------------------------------------------------
        // 6. Cancel button — aborts the in-flight upload via AbortSignal, OR
        //    discards the completed upload so the user can pick a different file.
        // -------------------------------------------------------------------------
        function handleCancelClick(): void {
            if (currentUploadId) {
                headlessEditor.getFileHandler().cancel(currentUploadId);
                setStatus('Cancellation requested...');
                return;
            }

            if (selectedFile || lastUploadedUrl) {
                discardSelection();
            }
        }

        function discardSelection(): void {
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
        function handleInsertClick(): void {
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

        function resetForNextSelection(): void {
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