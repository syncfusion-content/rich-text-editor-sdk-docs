<template>
    <div class="page-container">
        <h1>JSON Content</h1>
        <div ref="editorElement" id="headless-editor" class="editor-container"></div>
        <div class="toolbar">
            <button id="set-document" type="button" v-on:click="setDocument">Load JSON Content</button>
            <button id="get-document" type="button" v-on:click="getDocument">Get Document</button>
            <button id="get-json" type="button" v-on:click="getJson">Export JSON</button>
            <button id="round-trip" type="button" v-on:click="roundTrip">JSON Round-Trip</button>
        </div>
        <div class="output-section">
            <h2>Document Output</h2>
            <pre id="output">{{ outputText }}</pre>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

const initialDocumentJson = '{' +
    '"type": "document",' +
    '"schemaVersion": 1,' +
    '"attrs": {},' +
    '"marks": [],' +
    '"children": [' +
        '{' +
            '"type": "heading",' +
            '"attrs": { "level": 2 },' +
            '"marks": [],' +
            '"children": [' +
                '{' +
                    '"type": "text",' +
                    '"text": "JSON Content",' +
                    '"attrs": {},' +
                    '"marks": []' +
                '}' +
            ']' +
        '},' +
        '{' +
            '"type": "paragraph",' +
            '"attrs": {},' +
            '"marks": [],' +
            '"children": [' +
                '{' +
                    '"type": "text",' +
                    '"text": "This content was loaded from a DocumentRoot.",' +
                    '"attrs": {},' +
                    '"marks": []' +
                '}' +
            ']' +
        '}' +
    ']' +
'}';

const updateDocumentJson = '{' +
    '"type": "document",' +
    '"schemaVersion": 1,' +
    '"attrs": {},' +
    '"marks": [],' +
    '"children": [' +
        '{' +
            '"type": "heading",' +
            '"attrs": { "level": 2 },' +
            '"marks": [],' +
            '"children": [' +
                '{' +
                    '"type": "text",' +
                    '"text": "Updated JSON Document",' +
                    '"attrs": {},' +
                    '"marks": []' +
                '}' +
            ']' +
        '},' +
        '{' +
            '"type": "paragraph",' +
            '"attrs": {},' +
            '"marks": [],' +
            '"children": [' +
                '{' +
                    '"type": "text",' +
                    '"text": "This content was applied using setDocument().",' +
                    '"attrs": {},' +
                    '"marks": []' +
                '}' +
            ']' +
        '}' +
    ']' +
'}';

const editorElement = ref(null);
const outputText = ref('Click a button to view the document output.');

let headlessEditor = null;

function showOutput(value) {
    if (typeof value === 'string') {
        outputText.value = value;
    } else {
        outputText.value = JSON.stringify(value, null, 2);
    }
}

function setDocument() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setDocument(JSON.parse(updateDocumentJson));
}

function getDocument() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getDocument());
}

function getJson() {
    if (!headlessEditor) {
        return;
    }
    showOutput(JSON.stringify(headlessEditor.getDocument(), null, 2));
}

function roundTrip() {
    if (!headlessEditor) {
        return;
    }
    const json = JSON.stringify(headlessEditor.getDocument());
    const restored = JSON.parse(json);
    headlessEditor.setDocument(restored);
    showOutput(restored);
}

onMounted(() => {
    headlessEditor = HeadlessEditor.create({
        extensions: [basicExtensions, placeholderExtension],
        document: JSON.parse(initialDocumentJson)
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
