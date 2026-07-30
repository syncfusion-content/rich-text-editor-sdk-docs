ej.base.enableRipple(true);

var editor = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something',
 change : function() {
   button.disabled = false;
} });
editor.appendTo('#editor');

 var button = new ej.buttons.Button({
   disabled : true
 });
button.appendTo('#validateSubmit')

var option = {
    rules: {
        // Initialize the CustomPlacement.
        editor: { required: [true, 'RTE: value is required'], minLength: [15, 'RTE: Need atleast 6 character length'], maxLength: [100, 'RTE: Maximum 100 character only'] }
    },
    customPlacement: function (inputElement, error) {
        document.getElementById('error').appendChild(error);
    }
};

var formObject = new ej.inputs.FormValidator('#form-element', option);

