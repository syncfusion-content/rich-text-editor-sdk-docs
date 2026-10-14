<template>
    <div id="container">
        <div ref="editorElement" id="headless-editor"></div>
        <div class="actions">
            <h3>Get Content</h3>
            <div class="button-group">
                <button id="get-document" type="button" v-on:click="getDocument">Get Document</button>
                <button id="get-html" type="button" v-on:click="getHtml">Get HTML</button>
                <button id="get-text" type="button" v-on:click="getText">Get Text</button>
                <button id="get-selection-text" type="button" v-on:click="getSelectionText">Get Selection Text</button>
            </div>
            <h3>Set Content</h3>
            <div class="button-group">
                <button id="set-html" type="button" v-on:click="setHtml">Set HTML</button>
                <button id="set-document" type="button" v-on:click="setDocument">Set Document</button>
                <button id="clear-content" type="button" v-on:click="clearContent">Clear Content</button>
            </div>
            <h3>Update Content</h3>
            <div class="button-group">
                <button id="insert-text" type="button" v-on:click="insertText">Insert Text</button>
                <button id="replace-text" type="button" v-on:click="replaceText">Replace Text</button>
                <button id="insert-node" type="button" v-on:click="insertNode">Insert Node</button>
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

const setDocumentJson = '{' +
    '"type": "document",' +
    '"schemaVersion": 1,' +
    '"attrs": {},' +
    '"marks": [],' +
    '"children": [' +
        '{' +
            '"type": "paragraph",' +
            '"attrs": {},' +
            '"marks": [],' +
            '"children": [' +
                '{' +
                    '"type": "text",' +
                    '"text": "Content set using setDocument().",' +
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
                    '"text": "Second paragraph.",' +
                    '"attrs": {},' +
                    '"marks": []' +
                '}' +
            ']' +
        '}' +
    ']' +
'}';

const insertNodeJson = '{' +
    '"type": "paragraph",' +
    '"attrs": {},' +
    '"marks": [],' +
    '"children": [' +
        '{' +
            '"type": "text",' +
            '"text": "Inserted paragraph.",' +
            '"attrs": {},' +
            '"marks": []' +
        '}' +
    ']' +
'}';

const editorElement = ref(null);
const outputText = ref('');

let headlessEditor = null;

function showOutput(value) {
    if (typeof value === 'string') {
        outputText.value = value;
    } else {
        outputText.value = JSON.stringify(value, null, 2);
    }
}

function getDocument() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getDocument());
}

function getHtml() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getHtml());
}

function getText() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getText());
}

function getSelectionText() {
    if (!headlessEditor) {
        return;
    }
    showOutput(headlessEditor.getSelectionText());
}

function setHtml() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setContent(
        '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
    );
}

function setDocument() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setDocument(JSON.parse(setDocumentJson));
}

function clearContent() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.setContent('');
}

function insertText() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.commands.insertText({
        text: 'Hello world'
    });
}

function replaceText() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.commands.replaceText({
        from: { offset: 0 },
        to: { offset: 12 },
        text: 'Updated text'
    });
}

function insertNode() {
    if (!headlessEditor) {
        return;
    }
    headlessEditor.commands.insertNode({
        parentPos: 0,
        index: 1,
        node: JSON.parse(insertNodeJson)
    });
}

onMounted(() => {
    headlessEditor = HeadlessEditor.create({
        extensions: [basicExtensions, placeholderExtension]
    });
    headlessEditor.setContent(
        '<p>Hello world! The Headless Editor. Edit this content and try the actions below.</p><p>This is the second paragraph.</p>'
    );
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
