import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, VideoService, AudioService, PasteCleanupService, ClipBoardCleanupService, AutoFormatService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule,
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <div class="theme-switcher">
                    <label for="themeSelect">Choose a theme:</label>
                    <select id="themeSelect" #themeSelect
                        (change)="rteObj.cssClass = themeSelect.value === 'default' ? 'custom' : 'custom ' + themeSelect.value">
                        <option value="default" selected>Default Theme</option>
                        <option value="theme1">Theme 1 (Dark Purple)</option>
                        <option value="theme2">Theme 2 (Light Gold)</option>
                        <option value="theme3">Theme 3 (Dark Gray)</option>
                    </select>
                </div>
                <ejs-richtexteditor #defaultRTE id="defaultRTE" cssClass="custom"
                    [quickToolbarSettings]="quickToolbarSettings"
                    [value]="rteValue">
                </ejs-richtexteditor>
            </div>
        </div>
    </div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, VideoService, AudioService, PasteCleanupService, ClipBoardCleanupService, AutoFormatService]
})
export class AppComponent {
    @ViewChild('defaultRTE') public rteObj!: RichTextEditorComponent;
    public cssClass: string = 'custom';

    public rteValue: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`;

    public quickToolbarSettings: object = {
        text: ['Bold', 'Italic', 'Underline', 'FontColor', 'BackgroundColor', 'Alignments', '|', 'FontSize', 'FontName', 'Formats', 'OrderedList', 'UnorderedList']
    };
}
