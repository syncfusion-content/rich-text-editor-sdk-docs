import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        headerToolbarSettings: ['AIcommands', 'Clear', 'Close'],
        promptToolbarSettings: ['Edit'],
        responseToolbarSettings: ['Copy', '|', 'Insert'],
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
            }
        ]
    }
});
editor.appendTo('#editor');