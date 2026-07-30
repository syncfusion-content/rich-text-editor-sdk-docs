var userDropDown;
var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        promptToolbarSettings: ['Edit', 'Copy', { command: 'Prompt', subCommand: 'Search', iconCss: 'e-icons e-open-link', tooltip: 'Search in Google' }],
        responseToolbarSettings: [{ command: 'Response', subCommand: 'Save', iconCss: 'e-icons e-save', tooltip: 'Save Response' }, 'Regenerate', 'Copy', '|', 'Insert'],
        headerToolbarSettings: ['AIcommands',
            { command: 'Header', subCommand: 'Profile', template: '<button id="profileDropDown" class="e-rte-dropdown-menu"></button>', align: 'Right' }, 'Close',],
        prompts: [
            {
                prompt: 'What is Essential Studio ?',
                response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.',
            },
        ],
    },
    aiAssistantToolbarClick: function (args) {
        if (args.item.iconCss === 'e-icons e-open-link') {
            var target = args.originalEvent.target;
            var promptContainer = target.closest('.e-prompt-container');
            var prompt_1 = promptContainer.querySelector('.e-prompt-text').textContent;
            window.open("https://www.google.com/search?q=" + prompt_1, '_blank');
        }
        else if (args.item.iconCss === 'e-icons e-save') {
            var response = args.event.currentTarget.closest('.e-output-container').querySelector('.e-content-body').innerHTML;
            console.log(response);
        }
    },
    beforePopupOpen: function (event) {
        if (event.type === 'AIAssistant') {
            userDropDown = new ej.splitbuttons.DropDownButton({
                items: [
                    { text: 'Usage', iconCss: 'e-icons e-chart' },
                    { text: 'Saved Response', iconCss: 'e-icons e-save' },
                    { separator: true },
                    { text: 'Log out', iconCss: 'e-icons e-view-side' }
                ],
                iconCss: 'e-icons e-user',
                cssClass: 'e-caret-hide',
            }, event.element.querySelector('#profileDropDown'));
        }
    },
    beforePopupClose: function (event) {
        if (event.type === 'AIAssistant') {
            userDropDown.destroy();
        }
    },
});

editor.appendTo('#editor');