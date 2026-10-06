import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html'
})
export class App {
}