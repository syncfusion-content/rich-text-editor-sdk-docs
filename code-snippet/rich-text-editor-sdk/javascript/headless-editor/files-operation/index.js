// -----------------------------------------------------------------------------
// 1. Create the editor.
// -----------------------------------------------------------------------------
var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.imageExtension,
        ej.headlesseditor.placeholderExtension
    ]
});
var container = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}
// -----------------------------------------------------------------------------
// 2. Register the file upload handler before any file operation begins.
// -----------------------------------------------------------------------------
var uploadHandler = {
    upload: function (request) {
        var total = request.file.size;
        var loaded = 0;
        var chunkSize = Math.max(Math.ceil(total / 10), 1);
        var pump = function (resolve) {
            if (request.signal && request.signal.aborted) {
                resolve({ aborted: true });
                return;
            }
            window.setTimeout(function () {
                loaded = Math.min(loaded + chunkSize, total);
                var progress = {
                    loaded: loaded,
                    total: total,
                    percentage: total > 0 ? (loaded / total) * 100 : 100
                };
                if (request.onProgress) {
                    request.onProgress(progress);
                }
                if (loaded < total) {
                    pump(resolve);
                } else {
                    resolve({ aborted: false });
                }
            }, 100);
        };
        return new window.Promise(function (resolve, reject) {
            pump(function (result) {
                if (result.aborted) {
                    reject(new DOMException('Upload cancelled', 'AbortError'));
                } else {
                    resolve({
                        url: URL.createObjectURL(request.file),
                        fileName: request.file.name,
                        mimeType: request.file.type,
                        size: request.file.size
                    });
                }
            });
        });
    },
    cancel: function (uploadId) {
        setStatus('Cancelling upload: ' + uploadId);
    }
};
headlessEditor.setFileUploadHandler(uploadHandler);
// -----------------------------------------------------------------------------
// 3. UI references.
// -----------------------------------------------------------------------------
var fileInput = document.getElementById('file-input');
var fileInfo = document.getElementById('file-info');
var progressBar = document.getElementById('progress-bar');
var progressText = document.getElementById('progress-text');
var statusMessage = document.getElementById('status-message');

var selectButton = document.getElementById('select-button');
var uploadButton = document.getElementById('upload-button');
var insertButton = document.getElementById('insert-button');
var cancelButton = document.getElementById('cancel-button');
// -----------------------------------------------------------------------------
// 4. State and helpers.
// -----------------------------------------------------------------------------
var selectedFile = null;
var currentUploadId = null;
var lastUploadedUrl = null;

function setStatus(message) {
    statusMessage.textContent = message;
}

function setProgress(percentage, state) {
    if (state === undefined) {
        state = 'uploading';
    }
    var clamped = Math.max(0, Math.min(100, percentage));
    progressBar.style.width = clamped + '%';
    progressText.textContent = clamped.toFixed(0) + '%';
    progressBar.classList.remove('failed', 'cancelled', 'completed');
    if (state !== 'uploading' && state !== 'idle') {
        progressBar.classList.add(state);
    }
}

function resetProgress() {
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressBar.classList.remove('failed', 'cancelled', 'completed');
}

function updateButtonStates() {
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

function formatFileInfo(file) {
    var kb = file.size / 1024;
    var sizeText = kb < 1024
        ? kb.toFixed(1) + ' KB'
        : (kb / 1024).toFixed(2) + ' MB';
    return file.name + ' (' + sizeText + ')';
}
// -----------------------------------------------------------------------------
// 5. Select File button — opens the file picker.
// -----------------------------------------------------------------------------
selectButton.addEventListener('click', function () {
    fileInput.value = '';
    fileInput.click();
});

fileInput.addEventListener('change', function () {
    var file = fileInput.files && fileInput.files[0];
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
// 6. Upload button — starts the upload and reports progress.
// -----------------------------------------------------------------------------
uploadButton.addEventListener('click', function () {
    if (!selectedFile) {
        return;
    }
    resetProgress();
    setStatus('Uploading...');
    currentUploadId = headlessEditor.getFileHandler().startUpload(selectedFile);
    updateButtonStates();
    pollUploadState();
});

function pollUploadState() {
    if (!currentUploadId) {
        return;
    }
    var pending = headlessEditor.getFileHandler().getPendingUpload(currentUploadId);
    if (!pending) {
        return;
    }
    if (pending.status === 'uploading' || pending.status === 'pending') {
        var pct = pending.progress && pending.progress.percentage ? pending.progress.percentage : 0;
        setProgress(pct, 'uploading');
        window.setTimeout(pollUploadState, 100);
        return;
    }
    if (pending.status === 'completed') {
        setProgress(100, 'completed');
        lastUploadedUrl = pending.result && pending.result.url ? pending.result.url : null;
        var completedName = pending.result && pending.result.fileName ? pending.result.fileName : (selectedFile ? selectedFile.name : '');
        setStatus('Upload complete: ' + completedName);
        currentUploadId = null;
        updateButtonStates();
        return;
    }
    if (pending.status === 'failed') {
        setProgress(0, 'failed');
        var errMsg = pending.error && pending.error.message ? pending.error.message : 'Unknown error';
        setStatus('Upload failed: ' + errMsg);
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
cancelButton.addEventListener('click', function () {
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

function discardSelection() {
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
insertButton.addEventListener('click', function () {
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
    setStatus('Inserted "' + selectedFile.name + '" into the editor.');
    // Briefly hold the 100% state so the user can see the upload completed,
    // then clear the panel so the next file selection starts fresh.
    window.setTimeout(resetForNextSelection, 1200);
});

function resetForNextSelection() {
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
