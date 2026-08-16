import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{}, {}> {
    private rteObj: RichTextEditorComponent | null = null;

    private rteValue: string = "<h2>Welcome to the Rich Text Editor Demo!</h2><p>The Rich Text Editor control is a WYSIWYG (&quot;what you see is what you get&quot;) editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>";

    private tools: object = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

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
