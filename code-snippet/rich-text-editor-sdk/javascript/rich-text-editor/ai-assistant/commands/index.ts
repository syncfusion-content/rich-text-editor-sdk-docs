import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        commands: [
            { text: 'Rewrite', prompt: 'Rewrite the content to be more refined.' },
            { text: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:' },
            {
                text: 'Change Tone',
                items: [
                    { text: 'Professional', prompt: 'Rewrite the following content in a professional tone:' },
                    { text: 'Casual', prompt: 'Rewrite the following content in a casual, conversational tone:' },
                    { text: 'Direct', prompt: 'Rewrite the following content to be more direct and to the point:' },
                ],
            },
        ]
    },
});
editor.appendTo('#editor');