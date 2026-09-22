import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RichTextEditorUIModule],
    templateUrl: './app.html'
})
export class App {
}