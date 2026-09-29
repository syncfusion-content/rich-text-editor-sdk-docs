import * as React from 'react';
import { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HeadlessEditor, underlineExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                underlineExtension.configure({
                    htmlAttributes: { class: 'my-custom-class' }
                })
            ],
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