import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension,
    imageExtension,
    FileUploadHandler,
    FileUploadRequest,
    FileUploadProgress
} from '@syncfusion/ej2-headless-editor';


// -----------------------------------------------------------------------------
// 1. Create the editor.
// -----------------------------------------------------------------------------

var headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [basicExtensions, imageExtension, placeholderExtension]
});

var container: HTMLElement | null =
    document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}

// -----------------------------------------------------------------------------
// 2. Register the file upload handler.
// -----------------------------------------------------------------------------

var uploadHandler: FileUploadHandler = {
    upload: async function (request: FileUploadRequest) {
        var total: number = request.file.size;
        var loaded: number = 0;
        var chunkSize: number = Math.max(Math.ceil(total / 10), 1);

        while (loaded < total) {
            if (request.signal && request.signal.aborted) {
                throw new DOMException('Upload cancelled', 'AbortError');
            }

            await new Promise<void>(function (resolve: () => void) {
                window.setTimeout(resolve, 100);
            });

            loaded = Math.min(loaded + chunkSize, total);

            var progress: FileUploadProgress = {
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

    cancel: function (uploadId: string): void {
        setStatus('Cancelling upload: ' + uploadId);
    }
};

headlessEditor.setFileUploadHandler(uploadHandler);

// -----------------------------------------------------------------------------
// 3. UI references.
// -----------------------------------------------------------------------------

var fileInput = document.getElementById('file-input') as HTMLInputElement;
var fileInfo = document.getElementById('file-info') as HTMLElement;
var progressBar = document.getElementById('progress-bar') as HTMLElement;
var progressText = document.getElementById('progress-text') as HTMLElement;
var statusMessage = document.getElementById('status-message') as HTMLElement;

var selectButton = document.getElementById('select-button') as HTMLButtonElement;
var uploadButton = document.getElementById('upload-button') as HTMLButtonElement;
var insertButton = document.getElementById('insert-button') as HTMLButtonElement;
var cancelButton = document.getElementById('cancel-button') as HTMLButtonElement;

// -----------------------------------------------------------------------------
// 4. State and helpers.
// -----------------------------------------------------------------------------

var selectedFile: File | null = null;
var currentUploadId: string | null = null;
var lastUploadedUrl: string | null = null;

function setStatus(message: string): void {
    statusMessage.textContent = message;
}

function setProgress(
    percentage: number,
    state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'
): void {
    var clamped: number = Math.max(0, Math.min(100, percentage));

    progressBar.style.width = clamped + '%';
    progressText.textContent = clamped.toFixed(0) + '%';

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
    uploadButton.disabled = !selectedFile || currentUploadId !== null;
    insertButton.disabled = !lastUploadedUrl;

    cancelButton.disabled =
        selectedFile === null && lastUploadedUrl === null;
}

function formatFileInfo(file: File): string {
    var kb: number = file.size / 1024;

    var sizeText: string = kb < 1024
        ? kb.toFixed(1) + ' KB'
        : (kb / 1024).toFixed(2) + ' MB';

    return file.name + ' (' + sizeText + ')';
}

// -----------------------------------------------------------------------------
// 5. Select File button.
// -----------------------------------------------------------------------------

selectButton.addEventListener('click', function (): void {
    fileInput.value = '';
    fileInput.click();
});

fileInput.addEventListener('change', function (): void {
    var file: File | undefined =
        fileInput.files && fileInput.files.length > 0
            ? fileInput.files[0]
            : undefined;

    if (!file) {
        return;
    }

    selectedFile = file;
    lastUploadedUrl = null;

    fileInfo.textContent = 'Selected: ' + formatFileInfo(file);

    setStatus('File selected. Click Upload to start.');

    resetProgress();
    updateButtonStates();
});

// -----------------------------------------------------------------------------
// 6. Upload button.
// -----------------------------------------------------------------------------

uploadButton.addEventListener('click', function (): void {
    if (!selectedFile) {
        return;
    }

    resetProgress();
    setStatus('Uploading...');

    currentUploadId =
        headlessEditor.getFileHandler().startUpload(selectedFile);

    updateButtonStates();
    pollUploadState();
});

function pollUploadState(): void {
    if (!currentUploadId) {
        return;
    }

    var pending =
        headlessEditor.getFileHandler().getPendingUpload(currentUploadId);

    if (!pending) {
        return;
    }

    if (pending.status === 'uploading' || pending.status === 'pending') {
        var pct: number =
            pending.progress && pending.progress.percentage !== undefined
                ? pending.progress.percentage
                : 0;

        setProgress(pct, 'uploading');

        window.setTimeout(pollUploadState, 100);
        return;
    }

    if (pending.status === 'completed') {
        setProgress(100, 'completed');

        lastUploadedUrl =
            pending.result && pending.result.url
                ? pending.result.url
                : null;

        var uploadedFileName =
            pending.result && pending.result.fileName
                ? pending.result.fileName
                : (selectedFile ? selectedFile.name : '');

        setStatus('Upload complete: ' + uploadedFileName);

        currentUploadId = null;
        updateButtonStates();
        return;
    }

    if (pending.status === 'failed') {
        setProgress(0, 'failed');

        var errorMessage =
            pending.error && pending.error.message
                ? pending.error.message
                : 'Unknown error';

        setStatus('Upload failed: ' + errorMessage);

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
// 7. Cancel button.
// -----------------------------------------------------------------------------

cancelButton.addEventListener('click', function (): void {
    if (currentUploadId) {
        headlessEditor.getFileHandler().cancel(currentUploadId);
        setStatus('Cancellation requested...');
        return;
    }

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
// 8. Insert uploaded image into the editor.
// -----------------------------------------------------------------------------

insertButton.addEventListener('click', function (): void {
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

    setStatus('Inserted "' + selectedFile.name + '" into the editor.');

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

setStatus('Idle. Click Select File to begin.');
updateButtonStates();