import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

 let editor: RichTextEditor = new RichTextEditor({
    value: `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
    height: 250,
    actionBegin: onActionBegin,
});
editor.appendTo('#editor');

let enterListObj: DropDownList = new DropDownList({
    placeholder: 'When pressing the enter key',
    floatLabelType: 'Always',
    change: (args: any) => {
        if (enterListObj.value === 'DIV') {
            editor.enterKey = 'DIV';
            editor.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (enterListObj.value === 'BR') {
            editor.enterKey = 'BR';
            editor.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else {
            editor.enterKey = 'P'
            editor.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }
});
enterListObj.appendTo('#enterOption');

function onActionBegin(args: any) {
    if (args.requestType === 'EnterAction') {
      args.cancel = true; // to prevent default enter key action in editor level
      args.originalEvent.preventDefault(); // to prevent default enter key action in browser level
    }
}