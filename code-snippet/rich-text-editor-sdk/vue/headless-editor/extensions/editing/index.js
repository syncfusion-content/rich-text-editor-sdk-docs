import Vue from 'vue';
import {
    HeadlessEditor,
    basicExtensions,
    textAlignExtension,
    indentOutdentExtension,
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
                textAlignExtension,
                indentOutdentExtension,
                placeholderExtension
            ],
            enableTabKey: true
        });

        this.editor.mount(
            this.$el.querySelector('#headless-editor')
        );

        var loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    },

    methods: {},

    beforeDestroy: function () {
        if (this.editor && typeof this.editor.destroy === 'function') {
            this.editor.destroy();
        }
    }
});
