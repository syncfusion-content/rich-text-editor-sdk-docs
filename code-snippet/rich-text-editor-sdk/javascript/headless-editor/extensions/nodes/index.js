// Initial document rendered into the editor on mount. The shape is
// the same `DocumentRoot` accepted by `HeadlessEditor.create({ document })`;
// each block exercises one of the node or mark types listed in the
// sidebar so the reader can see the editor's behavior at a glance.
var initialDocument = {
    type: 'document',
    schemaVersion: 1,
    attrs: {},
    children: [
        {
            type: 'heading', attrs: { level: 2, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Headless Editor Demo', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'paragraph', attrs: { align: null, indent: 0 },
            children: [
                { type: 'text', text: 'A short tour of the ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'block nodes', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] },
                { type: 'text', text: ' and ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'inline marks', attrs: {}, children: [], marks: [{ type: 'italic', attrs: {} }] },
                { type: 'text', text: ' you can register through the built-in extensions.', attrs: {}, children: [], marks: [] }
            ],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Blockquote', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'blockquote', attrs: {},
            children: [{
                type: 'paragraph', attrs: { align: null, indent: 0 },
                children: [{ type: 'text', text: 'Blockquote blocks are used for quoted passages.', attrs: {}, children: [], marks: [] }],
                marks: []
            }],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Lists', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'bulletList', attrs: {},
            children: [
                { type: 'listItem', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Bullet item one', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] },
                { type: 'listItem', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Bullet item two', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] }
            ],
            marks: []
        },
        {
            type: 'orderedList', attrs: {},
            children: [
                { type: 'listItem', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Step one', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] },
                { type: 'listItem', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Step two', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] }
            ],
            marks: []
        },
        {
            type: 'taskList', attrs: {},
            children: [
                { type: 'taskItem', attrs: { checked: true }, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Reviewed demo', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] },
                { type: 'taskItem', attrs: { checked: false }, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Add a custom extension', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] }
            ],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Callout', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'callout', attrs: { variant: 'info' },
            children: [{
                type: 'paragraph', attrs: { align: null, indent: 0 },
                children: [{ type: 'text', text: 'Callouts draw attention to a section of the document.', attrs: {}, children: [], marks: [] }],
                marks: []
            }],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Code block', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'codeBlock', attrs: { language: 'ts' },
            children: [{ type: 'text', text: "const editor = HeadlessEditor.create({ extensions: [basicExtensions] });", attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Inline marks', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'paragraph', attrs: { align: null, indent: 0 },
            children: [
                { type: 'text', text: 'Use ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'bold', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] },
                { type: 'text', text: ', ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'italic', attrs: {}, children: [], marks: [{ type: 'italic', attrs: {} }] },
                { type: 'text', text: ', and ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'underline', attrs: {}, children: [], marks: [{ type: 'underline', attrs: {} }] },
                { type: 'text', text: ' for emphasis; ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'strikethrough', attrs: {}, children: [], marks: [{ type: 'strikethrough', attrs: {} }] },
                { type: 'text', text: ' marks removals. E = mc', attrs: {}, children: [], marks: [] },
                { type: 'text', text: '2', attrs: {}, children: [], marks: [{ type: 'superscript', attrs: {} }] },
                { type: 'text', text: ', H', attrs: {}, children: [], marks: [] },
                { type: 'text', text: '2', attrs: {}, children: [], marks: [{ type: 'subscript', attrs: {} }] },
                { type: 'text', text: 'O. Inline ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'code', attrs: {}, children: [], marks: [{ type: 'code', attrs: {} }] },
                { type: 'text', text: ' and ', attrs: {}, children: [], marks: [] },
                { type: 'text', text: 'links', attrs: {}, children: [], marks: [{
                    type: 'link', attrs: { href: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started', title: null, target: null, rel: null }
                }] },
                { type: 'text', text: ' round out the set.', attrs: {}, children: [], marks: [] }
            ],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Table block', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'table', attrs: {},
            children: [
                { type: 'tableRow', attrs: {}, children: [
                    { type: 'tableHeader', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Name', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] },
                    { type: 'tableHeader', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Role', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] }
                ], marks: [] },
                { type: 'tableRow', attrs: {}, children: [
                    { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Selma Rose', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] },
                    { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Lead designer', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] }
                ], marks: [] },
                { type: 'tableRow', attrs: {}, children: [
                    { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Andrew James', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] },
                    { type: 'tableCell', attrs: { colspan: 1, rowspan: 1, colwidth: null, align: null, verticalAlign: null, backgroundColor: null, color: null, borderColor: null },
                      children: [{ type: 'paragraph', attrs: { align: null, indent: 0 },
                        children: [{ type: 'text', text: 'Engineer', attrs: {}, children: [], marks: [] }], marks: [] }], marks: [] }
                ], marks: [] }
            ],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Collapsible block', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'collapsible', attrs: { collapsed: false },
            children: [
                { type: 'collapsibleHeader', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'Click to expand', attrs: {}, children: [], marks: [{ type: 'bold', attrs: {} }] }],
                    marks: []
                }], marks: [] },
                { type: 'collapsibleBody', attrs: {}, children: [{
                    type: 'paragraph', attrs: { align: null, indent: 0 },
                    children: [{ type: 'text', text: 'This is a toggle block. Useful for FAQs or detailed sections.', attrs: {}, children: [], marks: [] }],
                    marks: []
                }], marks: [] }
            ],
            marks: []
        },
        {
            type: 'heading', attrs: { level: 3, align: null, indent: 0 },
            children: [{ type: 'text', text: 'Divider', attrs: {}, children: [], marks: [] }],
            marks: []
        },
        {
            type: 'horizontalRule', attrs: {}, children: [], marks: []
        },
        {
            type: 'paragraph', attrs: { align: null, indent: 0 },
            children: [
            ],
            marks: []
        }
    ],
    marks: []
};

var headlessEditor = new ej.headlesseditor.HeadlessEditor.create({
    document: initialDocument,
    extensions: [
        ej.headlesseditor.basicExtensions,
        ej.headlesseditor.tableExtension,
        ej.headlesseditor.collapsibleExtension,
        ej.headlesseditor.calloutExtension,
        ej.headlesseditor.subscriptExtension,
        ej.headlesseditor.superscriptExtension,
        ej.headlesseditor.linkExtension
    ]
});

var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}