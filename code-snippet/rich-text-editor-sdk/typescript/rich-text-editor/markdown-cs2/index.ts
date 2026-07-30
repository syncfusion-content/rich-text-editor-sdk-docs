import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Link, Image, MarkdownEditor, Toolbar, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { createElement, KeyboardEventArgs, isNullOrUndefined, addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { marked } from 'marked';
RichTextEditor.Inject(Link, Image, MarkdownEditor, Toolbar, QuickToolbar);

let textArea: HTMLTextAreaElement;
let mdsource: HTMLElement;
let htmlPreview: HTMLElement;

let editor: RichTextEditor = new RichTextEditor({
    height: 340, editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|',
            { tooltipText: 'Preview', template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>' }, '|', 'Undo', 'Redo']
    },
    created: () => {
        textArea = editor.contentModule.getEditPanel() as HTMLTextAreaElement;
        textArea.addEventListener('keyup', (e: KeyboardEventArgs) => { markDownConversion(); });
        mdsource = document.getElementById('preview-code');
        mdsource.addEventListener('click', (e: MouseEvent) => {
            fullPreview({ mode: true, type: 'preview' });
            if ((e.currentTarget as HTMLElement).classList.contains('e-active')) {
                editor.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo']);
            } else {
                editor.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', '|',
                    'Formats', 'OrderedList', 'UnorderedList', '|',
                    'CreateLink', 'Image', 'Undo', 'Redo']);
            }
        });
    },
});
editor.appendTo('#editor');
function markDownConversion(): void {
    if (mdsource.classList.contains('e-active')) {
        let id: string = editor.getID() + 'html-preview';
        let htmlPreview: HTMLElement = editor.element.querySelector('#' + id);
        let rteElement = editor.contentModule.getEditPanel() as HTMLTextAreaElement;
        let rteValue = rteElement.value;
        htmlPreview.innerHTML = marked((editor.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    }
}
function fullPreview(e: { [key: string]: string | boolean }): void {
    let id: string = editor.getID() + 'html-preview';
    htmlPreview = editor.element.querySelector('#' + id);
    if (mdsource.classList.contains('e-active')) {
        mdsource.classList.remove('e-active');
        mdsource.parentElement.title = 'Preview';
        textArea.style.display = 'block';
        textArea.style.width = '100%';
        htmlPreview.style.display = 'none';
    } else {
        mdsource.classList.add('e-active');
        if (!htmlPreview) {
            htmlPreview = createElement('div', { className: 'e-content' });
            htmlPreview.id = id;
            textArea.parentNode.appendChild(htmlPreview);
        }
        if (e.type === 'preview') {
            textArea.style.display = 'none'; htmlPreview.classList.add('e-pre-source');
        } else {
            htmlPreview.classList.remove('e-pre-source');
            textArea.style.width = '50%';
        }
        htmlPreview.style.display = 'block';
        markDownConversion();
        mdsource.parentElement.title = 'Code View';
    }
}
