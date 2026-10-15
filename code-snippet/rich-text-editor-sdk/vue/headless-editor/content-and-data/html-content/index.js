import Vue from 'vue';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

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
            extensions: [basicExtensions, placeholderExtension],
            content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
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
            this.outputText = value;
        },

        setHtml: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setContent(
                '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
            );
        },

        clearContent: function () {
            if (!this.editor) {
                return;
            }
            this.editor.setContent('');
        },

        getHtml: function () {
            if (!this.editor) {
                return;
            }
            this.showOutput(this.editor.getHtml());
        }
    }
});
