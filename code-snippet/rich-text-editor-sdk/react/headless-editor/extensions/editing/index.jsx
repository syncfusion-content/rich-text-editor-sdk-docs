import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                ej.headlesseditor.basicExtensions,
                ej.headlesseditor.textAlignExtension,
                ej.headlesseditor.indentOutdentExtension,
                ej.headlesseditor.placeholderExtension
            ],
            enableTabKey: true
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

ReactDOM.render(<App />, document.getElementById('container'));