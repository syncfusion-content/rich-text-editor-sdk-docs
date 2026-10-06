import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App {
    // Enable Dimension in quick toolbar
    public imageSettings: object = {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/',
        dimension: {
            width: '300px',
            height: 'auto',
            minWidth: '50px',
            maxWidth: '1000px',
            minHeight: '50px',
            maxHeight: '800px'
        }
    };
    public quickToolbarSettings: object = {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    };
}
