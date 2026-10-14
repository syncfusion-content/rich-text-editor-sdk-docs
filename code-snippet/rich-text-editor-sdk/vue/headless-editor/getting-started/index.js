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
            editor: null
        };
    },
    mounted: function () {
        this.editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                placeholderExtension
            ]
        });
        this.editor.mount(
            this.$el.querySelector('#headless-editor')
        );

        document.getElementById('loader').style.display = 'none';
    },
    methods: {
        execute: function (command) {
            if (this.editor && this.editor.commands[command]) {
                this.editor.commands[command]();
            }
        }
    },
    beforeDestroy: function () {
        if (this.editor && typeof this.editor.destroy === 'function') {
            this.editor.destroy();
        }
    }
});