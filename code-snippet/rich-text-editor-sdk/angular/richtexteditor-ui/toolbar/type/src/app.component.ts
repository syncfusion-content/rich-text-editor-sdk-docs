import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App {
    public toolbarSettings: object = {
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', 'Alignment', '|',
            'Table', 'Image', 'Link', '|',
            'FontName', 'FontSize', '|',
            'NumberFormatList', 'BulletFormatList', '|',
            'Subscript', 'Superscript'
        ],
        type: 'Expanded',
        position: 'Top'
    };
}
