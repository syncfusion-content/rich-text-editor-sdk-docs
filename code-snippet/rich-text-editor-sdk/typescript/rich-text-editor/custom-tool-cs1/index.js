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

var editor = new ej.richtexteditor.RichTextEditor({
  value: `<div style='display: block;'><p style='margin-right: 10px'>The custom command \"insert special character\" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p></div>`,
  toolbarSettings: {
    items: [
      'Bold',
      'Italic',
      'Underline',
      '|',
      'Formats',
      'Alignments',
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
          selection = editor.formatter.editorManager.nodeSelection;
          var range = selection.getRange(
            editor.contentModule.getDocument()
          );
          selection.save(range, editor.contentModule.getDocument());
          dialog.show();
        },
        template:
          '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>',
      },
      '|',
      'Undo',
      'Redo',
    ],
  },
});
editor.appendTo('#editor');

function dialogOverlay() {
  var activeEle = dialog.element.querySelector('.char_block.e-active');
  if (activeEle) {
    activeEle.classList.remove('e-active');
  }
  dialog.hide();
}

function onInsert() {
  selection.restore();
  var activeEle = dialog.element.querySelector('.char_block.e-active');
  if (activeEle) {
    editor.executeCommand('insertText', activeEle.textContent, {
      undo: true,
    });
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
