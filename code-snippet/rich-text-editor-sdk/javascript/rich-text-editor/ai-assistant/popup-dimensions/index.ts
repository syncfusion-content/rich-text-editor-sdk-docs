import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        popupMaxHeight: 500,
        popupWidth: 500
    }
});
editor.appendTo('#editor');