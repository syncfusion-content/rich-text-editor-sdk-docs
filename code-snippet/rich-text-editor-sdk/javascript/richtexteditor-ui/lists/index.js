var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['BulletList', 'NumberedList', '|', 'Indent', 'Outdent']
    },
    listSettings: {
        numberFormatList: [
            { text: 'Number', value: 'decimal' },
            { text: 'Lower Greek', value: 'lowerGreek' },
            { text: 'Lower Roman', value: 'lowerRoman' },
            { text: 'Upper Alpha', value: 'upperAlpha' },
            { text: 'Lower Alpha', value: 'lowerAlpha' },
            { text: 'Upper Roman', value: 'upperRoman' }
        ],
        bulletFormatList: [
            { text: 'Disc', value: 'disc' },
            { text: 'Circle', value: 'circle' },
            { text: 'Square', value: 'square' }
        ]
    }
});
editor.appendTo('#editor');

// Programmatic list commands
// editor.commands().numberedList().apply();
// editor.commands().bulletList().apply();
// editor.commands().setListStyle().listType('circle').apply();
// editor.commands().toggleTaskList().apply();
