<template>
    <div class="control-section">
        <div class="file-ops-panel">
            <div class="file-ops-row">
                <button id="select-button" type="button" class="e-btn e-outline" @click="openFilePicker">Select File</button>
                <span id="file-info" class="file-ops-info">{{ fileInfo }}</span>
                <input id="file-input" type="file" accept="image/*" style="display:none" ref="fileInput" @change="onFileChange" />
            </div>
            <div class="file-ops-row">
                <button id="upload-button" type="button" class="e-btn e-outline" :disabled="uploadDisabled" @click="startUpload">Upload</button>
                <button id="insert-button" type="button" class="e-btn e-outline" :disabled="insertDisabled" @click="insertUploaded">Insert</button>
                <button id="cancel-button" type="button" class="e-btn e-outline" :disabled="cancelDisabled" @click="cancelOrDiscard">Cancel</button>
            </div>
            <div class="file-ops-row">
                <div class="file-ops-progress-track">
                    <div id="progress-bar" class="file-ops-progress-bar" :style="{ width: progressWidth }" :class="progressStateClass"></div>
                </div>
                <span id="progress-text" class="file-ops-info">{{ progressText }}</span>
            </div>
            <div id="status-message" class="file-ops-status">{{ statusMessage }}</div>
        </div>

        <div class="headless-editor-surface">
            <div ref="editorElement"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue';
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

export default defineComponent({
    data() {
        return {
            headlessEditor: null as HeadlessEditor | null,
            fileInfo: 'No file selected',
            statusMessage: 'Idle. Click Select File to begin.',
            progressWidth: '0%',
            progressText: '0%',
            progressStateClass: '',
            selectedFile: null as File | null,
            currentUploadId: null as string | null,
            lastUploadedUrl: null as string | null
        };
    },
    computed: {
        uploadDisabled(): boolean {
            return !this.selectedFile || this.currentUploadId !== null;
        },
        insertDisabled(): boolean {
            return !this.lastUploadedUrl;
        },
        cancelDisabled(): boolean {
            return this.selectedFile === null && this.lastUploadedUrl === null;
        }
    },
    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, imageExtension, placeholderExtension]
        });
        this.headlessEditor = markRaw(editor);
        const container = this.$refs.editorElement as HTMLDivElement;
        editor.mount(container);
        this.registerUploadHandler();
    },
    beforeUnmount() {
        if (this.headlessEditor && typeof this.headlessEditor.destroy === 'function') {
            this.headlessEditor.destroy();
        }
    },
    methods: {
        setStatus(message: string): void {
            this.statusMessage = message;
        },
        setProgress(percentage: number, state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'): void {
            const clamped: number = Math.max(0, Math.min(100, percentage));
            this.progressWidth = `${clamped}%`;
            this.progressText = `${clamped.toFixed(0)}%`;
            this.progressStateClass = (state !== 'uploading' && state !== 'idle') ? state : '';
        },
        resetProgress(): void {
            this.progressWidth = '0%';
            this.progressText = '0%';
            this.progressStateClass = '';
        },
        formatFileInfo(file: File): string {
            const kb: number = file.size / 1024;
            const sizeText: string = kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(2)} MB`;
            return `${file.name} (${sizeText})`;
        },
        registerUploadHandler(): void {
            if (!this.headlessEditor) {
                return;
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
                    this.setStatus(`Cancelling upload: ${uploadId}`);
                }
            };
            this.headlessEditor.setFileUploadHandler(uploadHandler);
        },
        openFilePicker(): void {
            const input = this.$refs.fileInput as HTMLInputElement;
            if (input) {
                input.value = '';
                input.click();
            }
        },
        onFileChange(event: Event): void {
            const input = event.target as HTMLInputElement;
            const file: File | undefined = input.files && input.files[0] ? input.files[0] : undefined;
            if (!file) {
                return;
            }
            this.selectedFile = file;
            this.lastUploadedUrl = null;
            this.fileInfo = `Selected: ${this.formatFileInfo(file)}`;
            this.setStatus('File selected. Click Upload to start.');
            this.resetProgress();
        },
        startUpload(): void {
            if (!this.headlessEditor || !this.selectedFile) {
                return;
            }
            this.resetProgress();
            this.setStatus('Uploading...');
            this.currentUploadId = this.headlessEditor.getFileHandler().startUpload(this.selectedFile);
            this.pollUploadState();
        },
        pollUploadState(): void {
            if (!this.currentUploadId || !this.headlessEditor) {
                return;
            }
            const pending = this.headlessEditor.getFileHandler().getPendingUpload(this.currentUploadId);
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
                this.setStatus(`Upload complete: ${pending.result?.fileName ?? this.selectedFile?.name ?? ''}`);
                this.currentUploadId = null;
                return;
            }
            if (pending.status === 'failed') {
                this.setProgress(0, 'failed');
                this.setStatus(`Upload failed: ${pending.error?.message ?? 'Unknown error'}`);
                this.currentUploadId = null;
                return;
            }
            if (pending.status === 'cancelled') {
                this.setProgress(0, 'cancelled');
                this.setStatus('Upload cancelled.');
                this.currentUploadId = null;
            }
        },
        cancelOrDiscard(): void {
            if (this.currentUploadId && this.headlessEditor) {
                this.headlessEditor.getFileHandler().cancel(this.currentUploadId);
                this.setStatus('Cancellation requested...');
                return;
            }
            if (this.selectedFile || this.lastUploadedUrl) {
                this.discardSelection();
            }
        },
        discardSelection(): void {
            this.selectedFile = null;
            this.lastUploadedUrl = null;
            this.currentUploadId = null;
            const input = this.$refs.fileInput as HTMLInputElement;
            if (input) {
                input.value = '';
            }
            this.fileInfo = 'No file selected';
            this.resetProgress();
            this.setStatus('Discarded. Click Select File to choose another.');
        },
        insertUploaded(): void {
            if (!this.headlessEditor || !this.lastUploadedUrl || !this.selectedFile) {
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
            window.setTimeout(() => this.resetForNextSelection(), 1200);
        },
        resetForNextSelection(): void {
            this.selectedFile = null;
            this.lastUploadedUrl = null;
            const input = this.$refs.fileInput as HTMLInputElement;
            if (input) {
                input.value = '';
            }
            this.fileInfo = 'No file selected';
            this.resetProgress();
            this.setStatus('Inserted. Click Select File to upload another.');
        }
    }
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/base/index.css";
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";

.control-section {
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.file-ops-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border: 1px solid #d7dce3;
    border-radius: 8px;
    background: #fafafa;
    box-sizing: border-box;
}

.file-ops-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.file-ops-info {
    color: #4b5563;
    font-size: 13px;
}

.file-ops-status {
    font-family: monospace;
    font-size: 12px;
    color: #6b7280;
    min-height: 1em;
}

.file-ops-progress-track {
    flex: 1 1 240px;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
}

.file-ops-progress-bar {
    height: 100%;
    width: 0%;
    background: #2563eb;
    transition: width 80ms linear;
}

.file-ops-progress-bar.failed {
    background: #dc2626;
}

.file-ops-progress-bar.cancelled {
    background: #9ca3af;
}

.file-ops-progress-bar.completed {
    background: #16a34a;
}

.headless-editor-surface {
    width: 100%;
    min-height: 320px;
    padding: 24px;
    border: 1px solid #d7dce3;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 6px rgba(0, 0, 0, 0.03);
}
</style>
