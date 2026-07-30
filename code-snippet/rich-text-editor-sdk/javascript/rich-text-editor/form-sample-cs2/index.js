var editor = new ej.richtexteditor.RichTextEditor({ 
  showCharCount: true,
  maxLength: 100,
  placeholder: 'Type something',
  change : function() {
   button.disabled = false;
}
});
editor.appendTo('#editor');
  
 var button = new ej.buttons.Button({
   disabled : true
 });
button.appendTo('#validateSubmit')
  
var option = {
  rules: {
    // Initialize the custom message.
    editor: { 
      required: [true, 'Type the Value'],  
      minLength: [20, 'Need atleast 6 character length'], 
      maxLength:[100, 'Maximum 100 character only']
    }  
  },
  customPlacement: function (inputElement, dateError) {
      document.getElementById('dateError').appendChild(dateError);
  }
};
  
var formObject = new ej.inputs.FormValidator('#form-element', option);



