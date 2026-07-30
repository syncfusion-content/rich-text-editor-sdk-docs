import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar, AIAssistantPromptRequestArgs} from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantPromptRequest: (event:AIAssistantPromptRequestArgs): void  => {
        setTimeout(() => {
            editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
            editor.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
        }, 5000);
    },
});
editor.appendTo('#editor');