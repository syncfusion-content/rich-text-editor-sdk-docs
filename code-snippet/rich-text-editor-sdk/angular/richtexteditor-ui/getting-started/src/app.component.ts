import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    selector: 'app-root',
    standalone: true,
    templateUrl: `<ejs-richtexteditor-ui placeholder="Type something ..."></ejs-richtexteditor-ui>`
})
export class App {
}