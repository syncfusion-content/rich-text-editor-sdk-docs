import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'de': {
        "blockeditor": {
            "paragraph": "Schreiben Sie etwas oder ‚/‘ für Befehle.",
            "heading1": "Überschrift 1",
            "heading2": "Überschrift 2",
            "heading3": "Überschrift 3",
            "heading4": "Überschrift 4",
            "collapsibleParagraph": "Umschaltbarer Absatz",
            "collapsibleHeading1": "Umschaltbare Überschrift 1",
            "collapsibleHeading2": "Umschaltbare Überschrift 2",
            "collapsibleHeading3": "Umschaltbare Überschrift 3",
            "collapsibleHeading4": "Umschaltbare Überschrift 4",
            "bulletList": "Element hinzufügen",
            "numberedList": "Element hinzufügen",
            "checkList": "Zu erledigen",
            "callout": "Schreiben Sie einen Hinweis",
            "addIconTooltip": "Klicken Sie, um unten einzufügen",
            "dragIconTooltipActionMenu": "Klicken Sie, um zu öffnen",
            "dragIconTooltip": "(Halten zum Ziehen)",
            "insertLink": "Link einfügen",
            "linkText": "Text",
            "linkTextPlaceholder": "Linktext",
            "linkUrl": "URL",
            "linkUrlPlaceholder": "https://example.com",
            "linkTitle": "Titel",
            "linkTitlePlaceholder": "Linktitel",
            "linkOpenInNewWindow": "In neuem Fenster öffnen",
            "linkInsert": "Einfügen",
            "linkRemove": "Entfernen",
            "linkCancel": "Abbrechen",
            "codeCopyTooltip": "Code kopieren"
        }
    }
})

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        blockType: 'Paragraph'
    }
];


// Initialize BlockEditor with some initial blocks
const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    locale: 'de'
});
 
blockEditor.appendTo('#blockeditor_locali');
