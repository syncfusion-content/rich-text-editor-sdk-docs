var blocksData = [
    {
        blockType: 'Paragraph',
        properties: { placeholder: 'Start typing your notes or press "/" for commands...'},
        content: [ { contentType: ej.blockeditor.ContentType.Text, content: '' } ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
