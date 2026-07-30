import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ],
        suggestions: [
            'What are the popular components of Essential Studio?',
            'Which web frameworks are supported by Essential Studio?'
        ]
    }
});
editor.appendTo('#editor');