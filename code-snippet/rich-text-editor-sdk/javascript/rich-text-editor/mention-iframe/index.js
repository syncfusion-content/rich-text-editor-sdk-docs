/**
* Rich text Editor with Mentions
*/

window.emailData = [
  { Name: "Selma Rose", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/2.png", EmailId: "selma@gmail.com" },
  { Name: "Maria", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/1.png", EmailId: "maria@gmail.com" },
  { Name: "Russo Kay", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "russo@gmail.com" },
  { Name: "Camden Kate", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/9.png", EmailId: "camden@gmail.com" },
  { Name: "Robert", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "robert@gmail.com" },
  { Name: "Garth", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/7.png", EmailId: "garth@gmail.com" },
  { Name: "Andrew James", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic04.png", EmailId: "andrew@gmail.com" },
  { Name: "Olivia", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/5.png", EmailId: "olivia@gmail.com" },
  { Name: "Sophia", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/6.png", EmailId: "sophia@gmail.com" },
  { Name: "Margaret", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/3.png", EmailId: "margaret@gmail.com" },
  { Name: "Ursula Ann", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "ursula@gmail.com" },
  { Name: "Laura Grace", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/4.png", EmailId: "laura@gmail.com" },
  { Name: "Albert", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic03.png", EmailId: "albert@gmail.com" },
  { Name: "William", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "william@gmail.com" }
];

var emailObj;
var editor = new ej.richtexteditor.RichTextEditor({
  iframeSettings: {
    enable: true,
  },
   placeholder: 'Type @ and tag the name',
   actionBegin: function (args) {
       if (args.requestType === 'EnterAction' && emailObj.element.classList.contains('e-popup-open')) {
           args.cancel = true;
       }
   },
   value: `<p>Hello <span contenteditable="false" class="e-mention-chip"><a href="mailto:maria@gmail.com" title="maria@gmail.com">@Maria</a></span>,</p>
                <p>Welcome to the mention integration with rich text editor demo. Type <code>@</code> character and tag user from the suggestion list. </p>`
});
editor.appendTo('#mention_integration');

// Initialize Mention control
   emailObj = new ej.dropdowns.Mention({
   dataSource: emailData,
   fields: { text: 'Name' },
   suggestionCount: 8,
   displayTemplate: '<a href=mailto:${EmailId} title=${EmailId}>@${Name}</a>',
   itemTemplate: '<table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" src="${EmployeeImage}" alt="employee" /><span class="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom ${Status}"></span></div></td><td><span class="person">${Name}</span><span class="email">${EmailId}</span></td</tr></table>',
   popupWidth: '250px',
   popupHeight: '200px',
   target: editor.inputElement,
   allowSpaces: true
});
emailObj.appendTo('#mentionEditor');


