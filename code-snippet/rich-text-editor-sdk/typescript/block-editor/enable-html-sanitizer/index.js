var blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`
            }
        ]
    }
];

var blockeditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    enableHtmlSanitizer: true
});
blockeditor.appendTo('#blockEditor');
