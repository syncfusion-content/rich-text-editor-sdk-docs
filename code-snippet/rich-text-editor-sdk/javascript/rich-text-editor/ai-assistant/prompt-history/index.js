var editor = new ej.richtexteditor.RichTextEditor({
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

document.getElementById('saveBtn').onclick = function (e) {
    const promptHistory = editor.getAIPromptHistory();
    console.log(promptHistory);
    // Handle DB Post and save history to the DB.
};