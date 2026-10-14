import Vue from 'vue';
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

new Vue({
    el: '#app',

    data: function () {
        return {
            editor: null,
            outputText: ''
        };
    },

    mounted: function () {
        var editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        editor.setContent(
            '<p>Hello world! The Headless Editor. Edit this content and try the actions below.</p><p>This is the second paragraph.</p>'
        );
        this.editor = editor;
        editor.mount(this.$el.querySelector('#headless-editor'));

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
        showOutput: function (value) {
            if (typeof value === 'string') {
                this.outputText = value;
            } else {
                this.outputText = JSON.stringify(value, null, 2);
            }
        },

        getDocument: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getDocument());
        },

        getHtml: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getHtml());
        },

        getText: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getText());
        },

        getSelectionText: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getSelectionText());
        },

        setHtml: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setContent(
                '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
            );
        },

        setDocument: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setDocument(JSON.parse(setDocumentJson));
        },

        clearContent: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setContent('');
        },

        insertText: function () {
            if (!this.editor) {
                return;
            }
            this.editor.commands.insertText({
                text: 'Hello world'
            });
        },

        replaceText: function () {
            if (!this.editor) {
                return;
            }
            this.editor.commands.replaceText({
                from: { offset: 0 },
                to: { offset: 12 },
                text: 'Updated text'
            });
        },

        insertNode: function () {
            if (!this.editor) {
                return;
            }
            this.editor.commands.insertNode({
                parentPos: 0,
                index: 1,
                node: JSON.parse(insertNodeJson)
            });
        }
    }
});
