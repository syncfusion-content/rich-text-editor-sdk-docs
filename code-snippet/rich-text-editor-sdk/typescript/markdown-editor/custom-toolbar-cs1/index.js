ej.base.enableRipple(true);
var dialog;

var selection = new ej.richtexteditor.NodeSelection();
var ranges;
// Initialization of Dialog
var dialog = new ej.popups.Dialog({
  header: 'Special Characters',
  content: document.getElementById('rteSpecial_char'),
  target: document.getElementById('container'),
  showCloseIcon: true,
  isModal: true,
  height: 'auto',
  visible: false,
  width: '500px',
  cssClass: 'e-rte-elements',
  overlayClick: dialogOverlay,
  created: onCreated,
  buttons: [
    { buttonModel: { content: 'Insert', isPrimary: true }, click: onInsert },
    { buttonModel: { content: 'Cancel' }, click: dialogOverlay },
  ],
});
// Render initialized Dialog
dialog.appendTo('#customTbarDialog');


var markdownRTE = new ej.richtexteditor.RichTextEditor({
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

          // Get the textarea (Markdown editor)
          var markdownEditor = markdownRTE.contentModule.getEditPanel();

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
  var activeEle = dialog.element.querySelector('.char_block.e-active');
  if (activeEle) {
    activeEle.classList.remove('e-active');
  }
  dialog.hide();
}

function onInsert() {
  var activeEle = dialog.element.querySelector('.char_block.e-active');
  if (activeEle) {
    var markdownEditor = markdownRTE.contentModule.getEditPanel();

    // Ensure selection data exists
    if (!selection || selection.start === undefined) {
      selection = {
        start: markdownEditor.selectionStart,
        end: markdownEditor.selectionEnd,
      };
    }

    var text = markdownEditor.value;
    var insertText = activeEle.textContent;

    // Insert the special character at the saved cursor position
    var newText =
      text.slice(0, selection.start) + insertText + text.slice(selection.end);
    markdownEditor.value = newText;

    // Set the cursor position after the inserted character
    var newCursorPosition = selection.start + insertText.length;
    markdownEditor.selectionStart = markdownEditor.selectionEnd =
      newCursorPosition;

    // Refocus the editor
    markdownEditor.focus();
  }
  dialogOverlay();
}

function onCreated() {
  var dialogCtn = document.getElementById('rteSpecial_char');
  dialogCtn.onclick = function (e) {
    var target = e.target;
    var activeEle = dialog.element.querySelector('.char_block.e-active');
    if (target.classList.contains('char_block')) {
      target.classList.add('e-active');
      if (activeEle) {
        activeEle.classList.remove('e-active');
      }
    }
  };
}
