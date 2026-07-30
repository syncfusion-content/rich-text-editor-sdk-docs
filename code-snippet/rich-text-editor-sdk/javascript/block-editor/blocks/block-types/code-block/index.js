var blocksData = [
    {
        blockType: 'Code',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,  
                content: 'function greeting() {\n  console.log("Hello, world!");\n}'
            }
        ]
    }
];

var codeBlockData = {
    defaultLanguage: 'javascript',
    languages: [
        { language: 'javascript', label: 'JavaScript' },
        { language: 'typescript', label: 'TypeScript' },
        { language: 'html', label: 'HTML' },
        { language: 'css', label: 'CSS' }
    ]
}

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    codeBlockSettings: codeBlockData
});
blockEditor.appendTo('#blockEditor');
