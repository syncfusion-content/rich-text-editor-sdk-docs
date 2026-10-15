import Vue from 'vue';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension,
    imageExtension
} from '@syncfusion/ej2-headless-editor';

new Vue({
    el: '#app',

    data: function () {
        return {
            editor: null,
            fileInfo: 'No file selected',
            statusMessage: 'Idle. Click Select File to begin.',
            progressWidth: '0%',
            progressText: '0%',
            progressStateClass: '',
            selectedFile: null,
            currentUploadId: null,
            lastUploadedUrl: null
        };
    },

    computed: {
        uploadDisabled: function () {
            return !this.selectedFile || this.currentUploadId !== null;
        },
        insertDisabled: function () {
            return !this.lastUploadedUrl;
        },
        cancelDisabled: function () {
            return this.selectedFile === null && this.lastUploadedUrl === null;
        }
    },

    mounted: function () {
        var editor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        this.editor = editor;
        editor.mount(this.$el.querySelector('#headless-editor'));
        this.registerUploadHandler();

        var loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    },

    beforeDestroy: function () {
        if (this.editor && typeof this.editor.destroy === 'function') {
            this.editor.destroy();
        }
    },

    methods: {
        setStatus: function (message) {
            this.statusMessage = message;
        },

        setProgress: function (percentage, state) {
            if (state === undefined) {
                state = 'uploading';
            }
            var clamped = Math.max(0, Math.min(100, percentage));
            this.progressWidth = clamped + '%';
            this.progressText = clamped.toFixed(0) + '%';
            this.progressStateClass = (state !== 'uploading' && state !== 'idle') ? state : '';
        },

        resetProgress: function () {
            this.progressWidth = '0%';
            this.progressText = '0%';
            this.progressStateClass = '';
        },

        formatFileInfo: function (file) {
            var kb = file.size / 1024;
            var sizeText = kb < 1024
                ? kb.toFixed(1) + ' KB'
                : (kb / 1024).toFixed(2) + ' MB';
            return file.name + ' (' + sizeText + ')';
        },

        registerUploadHandler: function () {
            var self = this;
            if (!self.editor) {
                return;
            }
            var uploadHandler = {
                upload: function (request) {
                    var total = request.file.size;
                    var loaded = 0;
                    var chunkSize = Math.max(Math.ceil(total / 10), 1);

                    return new Promise(function (resolve, reject) {
                        function step() {
                            if (request.signal && request.signal.aborted) {
                                reject(new DOMException('Upload cancelled', 'AbortError'));
                                return;
                            }
                            if (loaded >= total) {
                                resolve({
                                    url: URL.createObjectURL(request.file),
                                    fileName: request.file.name,
                                    mimeType: request.file.type,
                                    size: request.file.size
                                });
                                return;
                            }
                            window.setTimeout(function () {
                                loaded = Math.min(loaded + chunkSize, total);
                                var progress = {
                                    loaded: loaded,
                                    total: total,
                                    percentage: total > 0 ? (loaded / total) * 100 : 100
                                };
                                if (typeof request.onProgress === 'function') {
                                    request.onProgress(progress);
                                }
                                step();
                            }, 100);
                        }
                        step();
                    });
                },
                cancel: function (uploadId) {
                    self.setStatus('Cancelling upload: ' + uploadId);
                }
            };
            self.editor.setFileUploadHandler(uploadHandler);
        },

        openFilePicker: function () {
            var input = this.$el.querySelector('#file-input');
            if (input) {
                input.value = '';
                input.click();
            }
        },

        onFileChange: function (event) {
            var input = event.target;
            var files = input && input.files;
            var file = (files && files[0]) ? files[0] : null;
            if (!file) {
                return;
            }
            this.selectedFile = file;
            this.lastUploadedUrl = null;
            this.fileInfo = 'Selected: ' + this.formatFileInfo(file);
            this.setStatus('File selected. Click Upload to start.');
            this.resetProgress();
        },

        startUpload: function () {
            if (!this.editor || !this.selectedFile) {
                return;
            }
            this.resetProgress();
            this.setStatus('Uploading...');
            this.currentUploadId = this.editor.getFileHandler().startUpload(this.selectedFile);
            this.pollUploadState();
        },

        pollUploadState: function () {
            var self = this;
            if (!self.currentUploadId || !self.editor) {
                return;
            }
            var pending = self.editor.getFileHandler().getPendingUpload(self.currentUploadId);
            if (!pending) {
                return;
            }
            if (pending.status === 'uploading' || pending.status === 'pending') {
                var progressInfo = pending.progress;
                var pct = progressInfo ? (progressInfo.percentage || 0) : 0;
                self.setProgress(pct, 'uploading');
                window.setTimeout(function () { self.pollUploadState(); }, 100);
                return;
            }
            if (pending.status === 'completed') {
                self.setProgress(100, 'completed');
                var completedResult = pending.result;
                self.lastUploadedUrl = completedResult ? (completedResult.url || null) : null;
                var completedFileName = completedResult ? completedResult.fileName : '';
                var selectedFileName = self.selectedFile ? self.selectedFile.name : '';
                self.setStatus('Upload complete: ' + (completedFileName || selectedFileName || ''));
                self.currentUploadId = null;
                return;
            }
            if (pending.status === 'failed') {
                self.setProgress(0, 'failed');
                var failedError = pending.error;
                var failedMessage = failedError ? (failedError.message || 'Unknown error') : 'Unknown error';
                self.setStatus('Upload failed: ' + failedMessage);
                self.currentUploadId = null;
                return;
            }
            if (pending.status === 'cancelled') {
                self.setProgress(0, 'cancelled');
                self.setStatus('Upload cancelled.');
                self.currentUploadId = null;
            }
        },

        cancelOrDiscard: function () {
            if (this.currentUploadId && this.editor) {
                this.editor.getFileHandler().cancel(this.currentUploadId);
                this.setStatus('Cancellation requested...');
                return;
            }
            if (this.selectedFile || this.lastUploadedUrl) {
                this.discardSelection();
            }
        },

        discardSelection: function () {
            this.selectedFile = null;
            this.lastUploadedUrl = null;
            this.currentUploadId = null;
            var input = this.$el.querySelector('#file-input');
            if (input) {
                input.value = '';
            }
            this.fileInfo = 'No file selected';
            this.resetProgress();
            this.setStatus('Discarded. Click Select File to choose another.');
        },

        insertUploaded: function () {
            var self = this;
            if (!self.editor || !self.lastUploadedUrl || !self.selectedFile) {
                return;
            }
            self.editor.commands.insertImage([
                {
                    src: self.lastUploadedUrl,
                    alt: self.selectedFile.name,
                    display: 'block',
                    align: 'none',
                    wrap: 'none'
                }
            ]);
            self.setStatus('Inserted "' + self.selectedFile.name + '" into the editor.');
            window.setTimeout(function () { self.resetForNextSelection(); }, 1200);
        },

        resetForNextSelection: function () {
            this.selectedFile = null;
            this.lastUploadedUrl = null;
            var input = this.$el.querySelector('#file-input');
            if (input) {
                input.value = '';
            }
            this.fileInfo = 'No file selected';
            this.resetProgress();
            this.setStatus('Inserted. Click Select File to upload another.');
        }
    }
});
