import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        enable: false
    }
} );
editor.appendTo( '#editor' );


document.getElementById('ribbonBold').addEventListener('click', function (): void {
    editor.commands().bold().apply();
});
document.getElementById('ribbonItalic').addEventListener('click', function (): void {
    editor.commands().italic().apply();
});
document.getElementById('ribbonUnderline').addEventListener('click', function (): void {
    editor.commands().underline().apply();
});
document.getElementById('ribbonHeading').addEventListener('change', function (e: Event): void {
    const value: string = (e.target as HTMLInputElement).value;
    if (value === 'paragraph') {
        editor.commands().paragraph().apply();
    } else if (value === 'heading1') {
        editor.commands().heading1().apply();
    } else if (value === 'heading2') {
        editor.commands().heading2().apply();
    } else if (value === 'heading3') {
        editor.commands().heading3().apply();
    }
});
document.getElementById('ribbonColor').addEventListener('input', function (e: Event): void {
    editor.commands().fontColor().color((e.target as HTMLInputElement).value).apply();
});