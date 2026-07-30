import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import {
  RichTextEditor,
  Toolbar,
  Link,
  Image,
  MarkdownEditor,
} from '@syncfusion/ej2-richtexteditor';
import { Dialog } from '@syncfusion/ej2-popups';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let selection: { start: number; end: number } | null = null;

// Initialization of Dialog
let dialog: Dialog = new Dialog({
  header: 'Special Characters',
  content: document.getElementById('rteSpecial_char'),
  target: document.getElementById('container'),
  showCloseIcon: true,
  isModal: true,
  visible: false,
  height: 'auto',
  width: '500px',
  cssClass: 'e-rte-elements',
  overlayClick: dialogOverlay,
  buttons: [
    { buttonModel: { content: 'Insert', isPrimary: true }, click: onInsert },
    { buttonModel: { content: 'Cancel' }, click: dialogOverlay },
  ],
  created: onCreated,
});
// Render initialized Dialog
dialog.appendTo('#customTbarDialog');

let markdownRTE: RichTextEditor = new RichTextEditor({
  editorMode: 'Markdown',
  value: `The custom command \"insert special character\" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.`,
  toolbarSettings: {
    items: [
      'Bold',
      'Italic',
      '|',
      'Formats',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      'Image',
      '|',
      'SourceCode',
      {
        tooltipText: 'Insert Symbol',
        undo: true,
        click: function () {
          dialog.element.style.display = '';

          // Get textarea reference (Markdown Mode)
          const markdownEditor =
            markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement;

          // Save cursor position for later insertion
          selection = {
            start: markdownEditor.selectionStart,
            end: markdownEditor.selectionEnd,
          };

          dialog.show();
        },
        template:
          '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>',
      },
    ],
  },
});
markdownRTE.appendTo('#markdown-editor');

function dialogOverlay() {
  let activeEle: HTMLElement = dialog.element.querySelector(
    '.char_block.e-active'
  );
  if (activeEle) {
    activeEle.classList.remove('e-active');
  }
  dialog.hide();
}

function onInsert() {
  const activeEle = dialog.element.querySelector(
    '.char_block.e-active'
  ) as HTMLElement;
  if (activeEle) {
    const markdownEditor =
      markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement;

    // Ensure selection data exists
    if (!selection) {
      selection = {
        start: markdownEditor.selectionStart,
        end: markdownEditor.selectionEnd,
      };
    }

    const text = markdownEditor.value;
    const insertText = activeEle.textContent || '';

    // Insert the special character at the saved cursor position
    const newText =
      text.slice(0, selection.start) + insertText + text.slice(selection.end);
    markdownEditor.value = newText;

    // Set cursor position after inserted character
    const newCursorPosition = selection.start + insertText.length;
    markdownEditor.selectionStart = markdownEditor.selectionEnd =
      newCursorPosition;

    // Refocus the editor
    markdownEditor.focus();
  }
  dialogOverlay();
}

function onCreated() {
  const dialogCtn = document.getElementById('rteSpecial_char') as HTMLElement;
  dialogCtn.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const activeEle = dialog.element.querySelector('.char_block.e-active');
    if (target.classList.contains('char_block')) {
      target.classList.add('e-active');
      if (activeEle) {
        activeEle.classList.remove('e-active');
      }
    }
  };
}
