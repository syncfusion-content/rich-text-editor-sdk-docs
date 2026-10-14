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

<script>
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

var initialDocumentJson = '{' +
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

var updateDocumentJson = '{' +
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

export default {
    name: 'App',

    data() {
        return {
            headlessEditor: null,
            outputText: 'Click a button to view the document output.'
        };
    },

    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension],
            document: JSON.parse(initialDocumentJson)
        });
        this.headlessEditor = editor;
        editor.mount(this.$refs.editorElement);
    },

    beforeUnmount() {
        if (this.headlessEditor && typeof this.headlessEditor.destroy === 'function') {
            this.headlessEditor.destroy();
        }
    },

    methods: {
        showOutput(value) {
            if (typeof value === 'string') {
                this.outputText = value;
            } else {
                this.outputText = JSON.stringify(value, null, 2);
            }
        },
        setDocument() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setDocument(JSON.parse(updateDocumentJson));
        },
        getDocument() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getDocument());
        },
        getJson() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(JSON.stringify(this.headlessEditor.getDocument(), null, 2));
        },
        roundTrip() {
            if (!this.headlessEditor) {
                return;
            }
            var json = JSON.stringify(this.headlessEditor.getDocument());
            var restored = JSON.parse(json);
            this.headlessEditor.setDocument(restored);
            this.showOutput(restored);
        }
    }
};
</script>
