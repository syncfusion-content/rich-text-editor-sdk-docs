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
        maxPromptHistory: 30
    }
});
editor.appendTo('#editor');

const saveBtn = document.getElementById('saveBtn');
if (saveBtn) {
    saveBtn.onclick = (e: Event) => {
        const promptHistory = editor.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    };
}