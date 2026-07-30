import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, MarkdownEditorService , HtmlEditorService, ImageService, LinkService, TableService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='markdown-editor' [editorMode]='mode' [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, MarkdownEditorService, ImageService, LinkService, TableService]
})

export class AppComponent {
    public mode: string = 'Markdown';
    public value: string = 'The Markdown Editor supports keyboard shortcuts to format text, insert tables, links, and images, and to perform common editing actions such as undo and redo.';

    public tools: ToolbarSettingsModel = {
      items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'OrderedList',
        'UnorderedList',
        'CreateLink',
        'Image',
        'CreateTable',
        '|',
        'Undo',
        'Redo',
      ],
    };
}
