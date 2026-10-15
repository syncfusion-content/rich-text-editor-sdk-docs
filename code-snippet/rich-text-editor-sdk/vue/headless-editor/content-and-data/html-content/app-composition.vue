<template>
    <div id="container">
        <div ref="editorElement" id="headless-editor"></div>
        <div class="actions">
            <h3>Load HTML Content</h3>
            <div class="button-group">
                <button id="set-html" type="button" v-on:click="setHtml">Set HTML</button>
                <button id="clear-content" type="button" v-on:click="clearContent">Clear Content</button>
            </div>
            <h3>Export HTML Content</h3>
            <div class="button-group">
                <button id="get-html" type="button" v-on:click="getHtml">Get HTML</button>
            </div>
        </div>
        <h3>Output</h3>
        <pre id="output">{{ outputText }}</pre>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

const editorElement = ref(null);
const outputText = ref('');

let headlessEditor = null;

function showOutput(value) {
    outputText.value = value;
}

function setHtml() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setContent(
        '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
    );
}

function clearContent() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setContent('');
}

function getHtml() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getHtml());
}

onMounted(() => {
    headlessEditor = HeadlessEditor.create({
        extensions: [basicExtensions, placeholderExtension],
        content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
    });
    if (editorElement.value) {
        headlessEditor.mount(editorElement.value);
    }
});

onBeforeUnmount(() => {
    if (headlessEditor && typeof headlessEditor.destroy === 'function') {
        headlessEditor.destroy();
    }
});
</script>
