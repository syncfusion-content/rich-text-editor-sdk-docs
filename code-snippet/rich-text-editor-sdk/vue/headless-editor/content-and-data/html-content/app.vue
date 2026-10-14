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

<script>
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

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
            extensions: [basicExtensions, placeholderExtension],
            content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
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
            this.outputText = value;
        },
        setHtml() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setContent(
                '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
            );
        },
        clearContent() {
            if (!this.headlessEditor) {
                return;
            }
            this.headlessEditor.setContent('');
        },
        getHtml() {
            if (!this.headlessEditor) {
                return;
            }
            this.showOutput(this.headlessEditor.getHtml());
        }
    }
};
</script>
