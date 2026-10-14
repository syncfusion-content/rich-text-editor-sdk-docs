import * as React from 'react';
import { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

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
            enableTabKey: true,
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef} />;
}

const rootElement = document.getElementById('app') || document.body;
createRoot(rootElement).render(<App />);