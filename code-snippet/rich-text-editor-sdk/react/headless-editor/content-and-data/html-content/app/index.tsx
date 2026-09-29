import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);
    const outputRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension],
            content: '<h2>HTML Content</h2><p>This content was loaded when the editor was created.</p>'
        });

        function showOutput(value: string): void {
            if (outputRef.current) {
                outputRef.current.textContent = value;
            }
        }

        if (editorRef.current) {
            editor.mount(editorRef.current);
        }

        /* Load HTML Content */

        document.getElementById('set-html')?.addEventListener('click', () => {
            editor.setContent(
                '<h2>Updated HTML Content</h2><p>This content was loaded using <strong>setContent()</strong>.</p>'
            );
        });

        document.getElementById('clear-content')?.addEventListener('click', () => {
            editor.setContent('');
        });

        /* Export HTML Content */

        document.getElementById('get-html')?.addEventListener('click', () => {
            showOutput(editor.getHtml());
        });

        return () => editor.destroy();
    }, []);

    return (
        <div id="container">
            <div id="headless-editor" ref={editorRef}></div>
            <div className="actions">
                <h3>Load HTML Content</h3>
                <div className="button-group">
                    <button id="set-html">Set HTML</button>
                    <button id="clear-content">Clear Content</button>
                </div>
                <h3>Export HTML Content</h3>
                <div className="button-group">
                    <button id="get-html">Get HTML</button>
                </div>
            </div>
            <h3>Output</h3>
            <pre id="output" ref={outputRef}></pre>
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));