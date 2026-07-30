import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, AIAssistant, QuickToolbar, BeforePopupOpenCloseEventArgs, AIAssitantToolbarClickEventArgs } from '@syncfusion/ej2-richtexteditor';
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

let userDropDown: DropDownButton;
const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantToolbarClick: (args: AIAssitantToolbarClickEventArgs) => {
        if (args.item.iconCss === 'e-icons e-open-link') {
            const target: HTMLElement= args.originalEvent.target as HTMLElement;
            const promptContainer: HTMLElement = target.closest('.e-prompt-container') as HTMLElement;
            const prompt = (promptContainer.querySelector('.e-prompt-text') as HTMLElement).textContent;
            window.open(`https://www.google.com/search?q=${prompt}`, '_blank')
        } else if (args.item.iconCss === 'e-icons e-save') {
            const response = (args as any).event.currentTarget.closest('.e-output-container').querySelector('.e-content-body').innerHTML;
            console.log(response); // Handle Saving response here.
        }
    },
    beforePopupOpen: (event: BeforePopupOpenCloseEventArgs) => {
        if (event.type === 'AIAssistant') {
            userDropDown = new DropDownButton({
                items: [
                    { text: 'Usage', iconCss: 'e-icons e-chart' },
                    { text: 'Saved Response' , iconCss: 'e-icons e-save'},
                    { separator: true },
                    { text: 'Log out', iconCss: 'e-icons e-view-side' }
                ],
                iconCss: 'e-icons e-user',
                cssClass: 'e-caret-hide',
            }, event.element.querySelector('#profileDropDown') as HTMLButtonElement);
        }
    },
    beforePopupClose: (event: BeforePopupOpenCloseEventArgs) => {
        if (event.type === 'AIAssistant') {
            userDropDown.destroy();
        }
    },
});
editor.appendTo('#editor');