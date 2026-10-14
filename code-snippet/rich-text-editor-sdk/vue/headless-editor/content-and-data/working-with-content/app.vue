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

<script>
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

var setDocumentJson = '{' +
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

var insertNodeJson = '{' +
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

export default {
    name: 'App',

    data() {
        return {
            headlessEditor: null,
            outputText: ''
        };
    },

    mounted() {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        editor.setContent(
            '<p>Hello world! The Headless Editor. Edit this content and try the actions below.</p><p>This is the second paragraph.</p>'
        );
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
        getDocument() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getDocument());
        },
        getHtml() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getHtml());
        },
        getText() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getText());
        },
        getSelectionText() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getSelectionText());
        },
        setHtml() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setContent(
                '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
            );
        },
        setDocument() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setDocument(JSON.parse(setDocumentJson));
        },
        clearContent() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setContent('');
        },
        insertText() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.commands.insertText({
                text: 'Hello world'
            });
        },
        replaceText() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.commands.replaceText({
                from: { offset: 0 },
                to: { offset: 12 },
                text: 'Updated text'
            });
        },
        insertNode() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.commands.insertNode({
                parentPos: 0,
                index: 1,
                node: JSON.parse(insertNodeJson)
            });
        }
    }
};
</script>
