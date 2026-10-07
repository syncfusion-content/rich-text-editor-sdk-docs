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

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, computed } from 'vue';
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

const editorElement = ref<HTMLDivElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

let headlessEditor: HeadlessEditor | null = null;

const selectedFile = ref<File | null>(null);
const currentUploadId = ref<string | null>(null);
const lastUploadedUrl = ref<string | null>(null);
const progressWidth = ref('0%');
const progressText = ref('0%');
const progressStateClass = ref('');
const statusMessage = ref('Idle. Click Select File to begin.');
const fileInfo = ref('No file selected');

const uploadDisabled = computed(() => !selectedFile.value || currentUploadId.value !== null);
const insertDisabled = computed(() => !lastUploadedUrl.value);
const cancelDisabled = computed(() => selectedFile.value === null && lastUploadedUrl.value === null);

onMounted(() => {
    headlessEditor = HeadlessEditor.create({
        extensions: [basicExtensions, imageExtension, placeholderExtension]
    });
    if (editorElement.value) {
        headlessEditor.mount(editorElement.value);
    }
    registerUploadHandler();
});

onBeforeUnmount(() => {
    if (headlessEditor && typeof headlessEditor.destroy === 'function') {
        headlessEditor.destroy();
    }
});

function setStatus(message: string): void {
    statusMessage.value = message;
}

function setProgress(percentage: number, state: 'idle' | 'uploading' | 'completed' | 'failed' | 'cancelled' = 'uploading'): void {
    const clamped: number = Math.max(0, Math.min(100, percentage));
    progressWidth.value = `${clamped}%`;
    progressText.value = `${clamped.toFixed(0)}%`;
    progressStateClass.value = (state !== 'uploading' && state !== 'idle') ? state : '';
}

function resetProgress(): void {
    progressWidth.value = '0%';
    progressText.value = '0%';
    progressStateClass.value = '';
}

function formatFileInfo(file: File): string {
    const kb: number = file.size / 1024;
    const sizeText: string = kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(2)} MB`;
    return `${file.name} (${sizeText})`;
}

function registerUploadHandler(): void {
    if (!headlessEditor) {
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
            setStatus(`Cancelling upload: ${uploadId}`);
        }
    };
    headlessEditor.setFileUploadHandler(uploadHandler);
}

function openFilePicker(): void {
    if (fileInput.value) {
        fileInput.value.value = '';
        fileInput.value.click();
    }
}

function onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file: File | undefined = input.files && input.files[0] ? input.files[0] : undefined;
    if (!file) {
        return;
    }
    selectedFile.value = file;
    lastUploadedUrl.value = null;
    fileInfo.value = `Selected: ${formatFileInfo(file)}`;
    setStatus('File selected. Click Upload to start.');
    resetProgress();
}

function startUpload(): void {
    if (!headlessEditor || !selectedFile.value) {
        return;
    }
    resetProgress();
    setStatus('Uploading...');
    currentUploadId.value = headlessEditor.getFileHandler().startUpload(selectedFile.value);
    pollUploadState();
}

function pollUploadState(): void {
    if (!currentUploadId.value || !headlessEditor) {
        return;
    }
    const pending = headlessEditor.getFileHandler().getPendingUpload(currentUploadId.value);
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
        lastUploadedUrl.value = pending.result?.url ?? null;
        setStatus(`Upload complete: ${pending.result?.fileName ?? selectedFile.value?.name ?? ''}`);
        currentUploadId.value = null;
        return;
    }
    if (pending.status === 'failed') {
        setProgress(0, 'failed');
        setStatus(`Upload failed: ${pending.error?.message ?? 'Unknown error'}`);
        currentUploadId.value = null;
        return;
    }
    if (pending.status === 'cancelled') {
        setProgress(0, 'cancelled');
        setStatus('Upload cancelled.');
        currentUploadId.value = null;
    }
}

function cancelOrDiscard(): void {
    if (currentUploadId.value && headlessEditor) {
        headlessEditor.getFileHandler().cancel(currentUploadId.value);
        setStatus('Cancellation requested...');
        return;
    }
    if (selectedFile.value || lastUploadedUrl.value) {
        discardSelection();
    }
}

function discardSelection(): void {
    selectedFile.value = null;
    lastUploadedUrl.value = null;
    currentUploadId.value = null;
    if (fileInput.value) {
        fileInput.value.value = '';
    }
    fileInfo.value = 'No file selected';
    resetProgress();
    setStatus('Discarded. Click Select File to choose another.');
}

function insertUploaded(): void {
    if (!headlessEditor || !lastUploadedUrl.value || !selectedFile.value) {
        return;
    }
    headlessEditor.commands.insertImage([
        {
            src: lastUploadedUrl.value,
            alt: selectedFile.value.name,
            display: 'block',
            align: 'none',
            wrap: 'none'
        }
    ]);
    setStatus(`Inserted "${selectedFile.value.name}" into the editor.`);
    window.setTimeout(resetForNextSelection, 1200);
}

function resetForNextSelection(): void {
    selectedFile.value = null;
    lastUploadedUrl.value = null;
    if (fileInput.value) {
        fileInput.value.value = '';
    }
    fileInfo.value = 'No file selected';
    resetProgress();
    setStatus('Inserted. Click Select File to upload another.');
}
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
