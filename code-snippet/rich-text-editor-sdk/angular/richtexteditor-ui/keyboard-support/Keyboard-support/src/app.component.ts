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
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo'],
        keyBindings: {
            link: 'ctrl+alt+k',
            image: 'ctrl+alt+i',
            'code-block': 'ctrl+shift+c'
        }
    };
}
