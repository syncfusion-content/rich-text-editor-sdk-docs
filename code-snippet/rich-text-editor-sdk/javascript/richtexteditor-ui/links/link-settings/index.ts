import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    linkSettings: {
        linkOnPaste: true,
        defaultTarget: '_blank',
        autoPrependProtocol: true,
        defaultProtocol: 'https',
        allowedProtocols: ['http', 'https', 'mailto', 'tel']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
