import Vue from 'vue';
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

new Vue({
    el: '#app',

    data: function () {
        return {
            editor: null,
            outputText: 'Click a button to view the document output.'
        };
    },

    mounted: function () {
        var editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension],
            document: JSON.parse(initialDocumentJson)
        });
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

        setDocument: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setDocument(JSON.parse(updateDocumentJson));
        },

        getDocument: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getDocument());
        },

        getJson: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(JSON.stringify(this.editor.getDocument(), null, 2));
        },

        roundTrip: function () {
            if (!this.editor) {
                return;
            }
            var json = JSON.stringify(this.editor.getDocument());
            var restored = JSON.parse(json);
            this.editor.setDocument(restored);
            this.showOutput(restored);
        }
    }
});
