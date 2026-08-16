import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Video, Audio, PasteCleanup, ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Video, Audio, PasteCleanup, ClipBoardCleanup, AutoFormat);


    let rte: RichTextEditor = new RichTextEditor({ 
        cssClass: 'custom'
    });
    rte.appendTo('#defaultRTE');
    
    document.getElementById('themeSelect')?.addEventListener('change', (e: any) => {

        const theme = e.target.value;
    
        if (theme === 'default') {
            rte.cssClass = 'custom';
        } else {
            rte.cssClass = 'custom ' + theme;
        }
    
        rte.dataBind();
    });