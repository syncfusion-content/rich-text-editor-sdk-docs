var dialog = new ej.popups.Dialog({
  header: 'Dialog Header',
  footerTemplate: 'Dialog Footer',
  content: document.getElementById('dlgContent'),
  showCloseIcon: true,
  width: '400px',
  height: '250px',
  open: onOpen,
});

dialog.appendTo('#dialog');

var editor = new ej.richtexteditor.RichTextEditor({});
editor.appendTo('#dlgContent');

document.getElementById('targetButton').onclick = () => {
  dialog.show();
};

function onOpen() {
  editor.refreshUI();
}
