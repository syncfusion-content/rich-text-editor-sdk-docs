import {
    RichTextEditor,
    Toolbar,
    Link,
    Image,
    Count,
    HtmlEditor,
    QuickToolbar,
  } from '@syncfusion/ej2-richtexteditor';
  RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);
  import { createElement } from '@syncfusion/ej2-base';
  import CodeMirror from 'codemirror';
  
  let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
      items: ['SourceCode'],
    },
    showCharCount: true,
    actionComplete: actionCompleteHandler,
    value: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
  });
  editor.appendTo('#editor');
  
  let myCodeMirror: any;
  
  function mirrorConversion(e?: any): void {
    let id: string = editor.getID() + 'mirror-view';
    let mirrorView: HTMLElement = editor.element.querySelector('#' + id);
    let rteContainer: HTMLElement =
      editor.element.querySelector('.e-rte-container');
  
    if (e.targetItem === 'Preview') {
      editor.value = myCodeMirror.getValue();
      editor.dataBind();
      rteContainer.classList.remove('e-rte-code-mirror-enabled');
      editor.focusIn();
    } else {
      const sourceContentContainer = rteContainer.querySelector('.e-source-content') as HTMLElement;
      rteContainer.classList.add('e-rte-code-mirror-enabled');
      rteContainer.classList.remove('e-source-code-enabled');
      if (!mirrorView) {
        mirrorView = createElement('div', {
          className: 'rte-code-mirror',
          id: id,
          styles: 'display: none;',
        });
        sourceContentContainer!.appendChild(mirrorView);
        renderCodeMirror(
          mirrorView,
          editor.value === null ? '' : editor.value
        );
      } else {
        myCodeMirror.setValue(editor.value === null ? '' : editor.value);
      }
      myCodeMirror.focus();
    }
  }
  
  function renderCodeMirror(mirrorView: HTMLElement, content: string): void {
    myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: 'text/html',
      lineWrapping: true,
    });
  }
  
  function actionCompleteHandler(e: any): void {
    if (
      e.targetItem &&
      (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')
    ) {
      mirrorConversion(e);
    }
  }
  