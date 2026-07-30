var editor = new ej.richtexteditor.RichTextEditor({
    placeholder: "Click link icon in toolbar to add the desired link",
    toolbarSettings: {
        items: ['createLink']
    },
    actionComplete: function (args) {
        if (args.requestType === 'Links') {
            if (args.elements[0].parentNode && args.elements[0].parentNode.tagName === 'A') {
                var emberEle = document.createElement('blockquote'); // to add the link
                emberEle.setAttribute('class', 'embedly-card'); // to add the class
                emberEle.appendChild(args.elements[0].parentElement);
                emberEle.appendChild(document.createElement('p'));
                args.range.insertNode(emberEle); // add the link  description to the rte content
            }
        }
    }
});
editor.appendTo('#editor');

