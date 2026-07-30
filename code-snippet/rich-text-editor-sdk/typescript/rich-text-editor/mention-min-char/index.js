window.emailData = [
    { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
    { Name: 'Maria', EmailId: 'maria@gmail.com' },
    { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
    { Name: 'Robert', EmailId: 'robert@gmail.com' },
    { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
]

var emailObj;
var editor = new ej.richtexteditor.RichTextEditor({
   placeholder: 'Type @ and tag the name',
});
editor.appendTo('#mention_integration');

// Initialize Mention control
emailObj = new ej.dropdowns.Mention({
    dataSource: emailData,
    fields: { text: 'Name' },
    target: '#mention_integration_rte-edit-view',
    minLength: 3,
});
emailObj.appendTo('#mentionEditor');