import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App {
    // Enable Image Resize with min/max constraints
    public imageSettings: object = {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/',
        resize: true,  // Enable resizing (default: true)
        dimension: {
            minWidth: '50px',
            maxWidth: '800px',
            minHeight: '50px',
            maxHeight: '600px'
        }
    };
    public quickToolbarSettings: object = {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    };
}
