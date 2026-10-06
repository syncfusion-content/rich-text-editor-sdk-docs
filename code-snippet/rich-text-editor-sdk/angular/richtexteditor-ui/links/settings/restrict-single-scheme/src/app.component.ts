import { Component } from '@angular/core';
import { RichTextEditorUIModule } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App {
    public linkSettings: object = {
        allowedProtocols: ['https'],
        defaultProtocol: 'https',
        autoPrependProtocol: true
    };
}
