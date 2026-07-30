import { BlockEditor, BlockModel, ContentType, CodeBlockSettingsModel } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Code',
        content: [
            {
                contentType: ContentType.Text,  
                content: 'function greeting() {\n  console.log("Hello, world!");\n}'
            }
        ]
    }
];

const codeBlockData: CodeBlockSettingsModel = {
    defaultLanguage: 'javascript',
    languages: [
        { language: 'javascript', label: 'JavaScript' },
        { language: 'typescript', label: 'TypeScript' },
        { language: 'html', label: 'HTML' },
        { language: 'css', label: 'CSS' }
    ]
}

const blockEditor = new BlockEditor({
    blocks: blocksData,
    codeBlockSettings: codeBlockData
});
blockEditor.appendTo('#blockEditor');
