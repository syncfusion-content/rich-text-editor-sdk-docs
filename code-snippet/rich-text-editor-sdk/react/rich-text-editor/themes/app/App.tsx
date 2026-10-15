import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    private rteObj: RichTextEditorComponent | null = null;

    private rteValue: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`;

    private onThemeChange = (e: any) => {
        const theme: string = e.target.value;
        if (theme === 'default') {
            (this.rteObj as RichTextEditorComponent).cssClass = 'custom';
        } else {
            (this.rteObj as RichTextEditorComponent).cssClass = 'custom ' + theme;
        }
        (this.rteObj as RichTextEditorComponent).dataBind();
    };

    public render() {
        return (
            <div>
                <div className="theme-switcher">
                    <label htmlFor="themeSelect">Choose a theme: </label>
                    <select id="themeSelect" onChange={this.onThemeChange}>
                        <option value="default" selected>Default Theme</option>
                        <option value="theme1">Theme 1 (Dark Purple)</option>
                        <option value="theme2">Theme 2 (Light Gold)</option>
                        <option value="theme3">Theme 3 (Dark Gray)</option>
                    </select>
                </div>
                <RichTextEditorComponent
                    ref={(scope: RichTextEditorComponent) => { this.rteObj = scope; }}
                    cssClass="custom"
                    height={450}
                    toolbarSettings={this.tools}
                    value={this.rteValue}
                >
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
                </RichTextEditorComponent>
            </div>
        );
    }
}
export default App;
