import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App {
    // Customize Quick Toolbar Items
    public quickToolbarSettings: object = {
        image: [
            'AltText',
            'Caption',
            '|',
            'Align',
            'Display',
            'WrapText',
            '|',
            'Dimension',
            'Replace',
            'Remove'
        ]
    };
}
