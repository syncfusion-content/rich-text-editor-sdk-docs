var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
      items: ['SourceCode'],
    },
  
    actionComplete: actionCompleteHandler,
  });
  editor.appendTo('#editor');
  
  var myCodeMirror;
  function mirrorConversion(e) {
    var id = editor.getID() + 'mirror-view';
    var mirrorView = editor.element.querySelector('#' + id);
    var rteContainer = editor.element.querySelector('.e-rte-container');
    if (e.targetItem === 'Preview') {
      editor.value = myCodeMirror.getValue();
      editor.dataBind();
      rteContainer.classList.remove('e-rte-code-mirror-enabled');
      editor.focusIn();
    } else {
      var sourceContentContainer = rteContainer.querySelector('.e-source-content');
      rteContainer.classList.add('e-rte-code-mirror-enabled');
      rteContainer.classList.remove('e-source-code-enabled');
      if (!mirrorView) {
        mirrorView = ej.base.createElement('div', {
          className: 'rte-code-mirror',
          id: id,
          styles: 'display: none;',
        });
        sourceContentContainer.appendChild(mirrorView);
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
  function renderCodeMirror(mirrorView, content) {
    myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: 'text/html',
      lineWrapping: true,
    });
  }
  
  function actionCompleteHandler(e) {
    if (
      e.targetItem &&
      (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')
    ) {
      mirrorConversion(e);
    }
  }
  