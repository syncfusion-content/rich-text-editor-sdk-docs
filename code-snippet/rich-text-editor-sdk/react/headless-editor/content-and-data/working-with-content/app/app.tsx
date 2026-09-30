import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';
function App() {
    const editorRef = useRef<HTMLDivElement>(null);
    const outputRef = useRef<HTMLPreElement>(null);
    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        function showOutput(value: unknown): void {
            if (outputRef.current) {
                outputRef.current.textContent = typeof value === 'string'
                    ? value
                    : JSON.stringify(value, null, 2);
            }
        }
        if (editorRef.current) {
            editor.mount(editorRef.current);
            editor.setContent(
                '<p>Hello world! The Headless Editor. Edit this content and try the actions below.</p><p>This is the second paragraph.</p>'
            );
        }
        /* Get Content */
        document.getElementById('get-document')?.addEventListener('click', () => {
            showOutput(editor.getDocument());
        });
        document.getElementById('get-html')?.addEventListener('click', () => {
            showOutput(editor.getHtml());
        });
        document.getElementById('get-text')?.addEventListener('click', () => {
            showOutput(editor.getText());
        });
        document.getElementById('get-selection-text')?.addEventListener('click', () => {
            showOutput(editor.getSelectionText());
        });
        /* Set Content */
        document.getElementById('set-html')?.addEventListener('click', () => {
            editor.setContent(
                '<h2>New Title</h2><p>Fresh content.</p><p>This is another paragraph.</p>'
            );
        });
        document.getElementById('set-document')?.addEventListener('click', () => {
            editor.setDocument({
                type: 'document',
                attrs: {},
                marks: [],
                schemaVersion: 1,
                children: [
                    {
                        type: 'paragraph',
                        attrs: {},
                        marks: [],
                        children: [
                            {
                                type: 'text',
                                text: 'Content set using setDocument().',
                                attrs: {},
                                marks: []
                            }
                        ]
                    },
                    {
                        type: 'paragraph',
                        attrs: {},
                        marks: [],
                        children: [
                            {
                                type: 'text',
                                text: 'Second paragraph.',
                                attrs: {},
                                marks: []
                            }
                        ]
                    }
                ]
            });
        });
        document.getElementById('clear-content')?.addEventListener('click', () => {
            editor.setContent('');
        });
        /* Update Content */
        document.getElementById('insert-text')?.addEventListener('click', () => {
            editor.commands.insertText({
                text: 'Hello world'
            });
        });
        document.getElementById('replace-text')?.addEventListener('click', () => {
            editor.commands.replaceText({
                from: { offset: 0 },
                to: { offset: 12 },
                text: 'Updated text'
            });
        });
        document.getElementById('insert-node')?.addEventListener('click', () => {
            editor.commands.insertNode({
                parentPos: 0,
                index: 1,
                node: {
                    type: 'paragraph',
                    attrs: {},
                    marks: [],
                    children: [
                        {
                            type: 'text',
                            text: 'Inserted paragraph.',
                            attrs: {},
                            marks: []
                        }
                    ]
                }
            });
        });
        return () => editor.destroy();
    }, []);
    return (
        <div id="container">
            <div id="headless-editor" ref={editorRef}></div>
            <div className="actions">
                <h3>Get Content</h3>
                <div className="button-group">
                    <button id="get-document">Get Document</button>
                    <button id="get-html">Get HTML</button>
                    <button id="get-text">Get Text</button>
                    <button id="get-selection-text">Get Selection Text</button>
                </div>
                <h3>Set Content</h3>
                <div className="button-group">
                    <button id="set-html">Set HTML</button>
                    <button id="set-document">Set Document</button>
                    <button id="clear-content">Clear Content</button>
                </div>
                <h3>Update Content</h3>
                <div className="button-group">
                    <button id="insert-text">Insert Text</button>
                    <button id="replace-text">Replace Text</button>
                    <button id="insert-node">Insert Node</button>
                </div>
            </div>
            <h3>Output</h3>
            <pre id="output" ref={outputRef}></pre>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));