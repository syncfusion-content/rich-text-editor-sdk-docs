var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        bannerTemplate: `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant</h3>
            <i>AI-generated results can be error-prone; review them carefully.</i>
        </div>`
    }
});

editor.appendTo('#editor');