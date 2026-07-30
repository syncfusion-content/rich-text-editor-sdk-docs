// Build data to be used in At.JS config.
var employeeList = [
    { id: 'emp01', name: 'Jacob', email: 'jacob@mail.com' },
    { id: 'emp02', name: 'Isabella', email: 'isabella@mail.com' },
    { id: 'emp03', name: 'Ethan', email: 'ethan@mail.com' },
    { id: 'emp04', name: 'Emma', email: 'emma@mail.com' },
    { id: 'emp05', name: 'Michael', email: 'michael@mail.com' },
    { id: 'emp06', name: 'Olivia', email: 'olivia@mail.com' },
    { id: 'emp07', name: 'Jeniffer', email: 'jeniffer@mail.com' }
];

var config = {
    at: "@",
    data: employeeList,
    displayTpl: '<li>${name} <small>${email}</small></li>',
    limit: 200
};

var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['|', 'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'SubScript', 'SuperScript', '|',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
            'Outdent', 'Indent', '|', 'CreateLink', '|', 'Image', '|', 'SourceCode']
    },
    placeholder:"Type @ to get the e-mail list",
    created: function (args) {
        var textArea = editor.contentModule.getEditPanel();
        $(textArea).atwho(config);
        $(textArea).on('keydown', function (e) {
            if (e.keyCode == 13 && $(textArea).atwho('isSelecting'))
                return false;
        });
    }
});
editor.appendTo('#editor');

