import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RichTextEditorUIModule, RichTextEditorUIComponent } from '@syncfusion/ej2-angular-richtexteditor-ui';

// The args shape is `{ item: ToolbarItemModel, event: Event }`.
// `ToolbarItemClickedEventArgs` lives in the toolbar-settings model file and
// is the canonical handler-arg type — declared inline here for portability.
interface ClickedArgs {
    item?: { id?: string; actionId?: string };
    event?: Event;
}

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class App implements AfterViewInit {
    @ViewChild('editor') public rteObj!: RichTextEditorUIComponent;

    public toolbarSettings: object = {
        itemClicked: (args: ClickedArgs): void => {
            if (args.item && args.item.actionId === 'uppercase') {
                // dispatch the `uppercase` command through the fluent builder
                this.rteObj.commands().uppercase().apply();
            }
        }
    };

    public quickToolbarSettings: object = {
        enable: true,
        text: [
            'Bold', 'Italic', 'Underline', '|',
            {
                actionId: 'uppercase',
                id: 'uppercase',
                text: 'UPPERCASE',
                tooltipText: 'Transform selection to UPPERCASE',
                windowsShortcutText: 'Ctrl + Shift + U',
                macShortcutText: '⇧ ⌘ U'
            },
            '|',
            'NumberedList', 'BulletList'
        ]
    };

    ngAfterViewInit(): void {
        // Replace the placeholder toolbarSettings on the live instance to wire the click handler
        (this.rteObj as any).toolbarSettings = this.toolbarSettings;
    }
}
