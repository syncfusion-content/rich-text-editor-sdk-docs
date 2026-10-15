<template>
    <div id="container">
        <div id="toolbar">
            <button id="undo" class="e-icons e-undo" title="Undo (Ctrl+Z)" @click="execute('undo')"></button>
            <button id="redo" class="e-icons e-redo" title="Redo (Ctrl+Y)" @click="execute('redo')"></button>
            <button id="bold" class="e-icons e-bold" title="Bold (Ctrl+B)" @click="execute('toggleBold')"></button>
            <button id="italic" class="e-icons e-italic" title="Italic (Ctrl+I)" @click="execute('toggleItalic')"></button>
            <button id="underline" class="e-icons e-underline" title="Underline (Ctrl+U)" @click="execute('toggleUnderline')"></button>
            <button id="strikethrough" class="e-icons e-strikethrough" title="Strike Through" @click="execute('toggleStrikethrough')"></button>
            <button id="inlineCode" class="e-icons e-insert-code" title="Inline Code (Ctrl+`)" @click="execute('toggleCodeMark')"></button>
            <button id="blockquote" class="e-icons e-blockquote" title="Blockquote (Ctrl+Alt+Q)" @click="execute('toggleBlockQuote')"></button>
            <button id="bulletList" class="e-icons e-list-unordered" title="Bulleted List" @click="execute('toggleBulletList')"></button>
            <button id="orderedList" class="e-icons e-list-ordered" title="Numbered List" @click="execute('toggleOrderedList')"></button>
        </div>

        <div ref="editorContainer" id="headless-editor"></div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

export default {
    name: 'AppComposition',
    setup() {
        const editorContainer = ref(null);
        let editor = null;
        const execute = function (command) {
            if (editor && editor.commands[command]) {
                editor.commands[command]();
            }
        };
        onMounted(function () {
            editor = HeadlessEditor.create({
                extensions: [basicExtensions, placeholderExtension]
            });
            editor.mount(editorContainer.value);
        });
        onBeforeUnmount(function () {
            if (editor && typeof editor.destroy === 'function') {
                editor.destroy();
            }
        });
        return {
            editorContainer,
            execute
        };
    }
};
</script>