var editor = new ej.richtexteditor.RichTextEditor({});
editor.appendTo('#editor');

editor.contentModule.getDocument().addEventListener("keydown", function (e) {
      if (e.key === 's' && e.ctrlKey === true) {
            e.preventDefault(); // to prevent default ctrl+s action
            editor.updateValue(); // to update the value after editing
            var value = editor.value; // you can get the RTE content to save in the desired database
      }
});

