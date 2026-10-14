import * as React from 'react';
import { useRef, useEffect } from 'react';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = ej.headlesseditor.HeadlessEditor.create({
            extensions: [
                ej.headlesseditor.basicExtensions,
                ej.headlesseditor.textAlignExtension,
                ej.headlesseditor.indentOutdentExtension,
                ej.headlesseditor.placeholderExtension
            ],
            enableTabKey: true,
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef} />;
}

export default App;