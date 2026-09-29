import * as React from 'react';
import { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HeadlessEditor, imageExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                imageExtension.configure({
                    display: 'block',
                    align: 'none',
                    wrap: 'none',
                    resize: {
                        enabled: true,
                        directions: ['bottom-right'],
                        alwaysPreserveAspectRatio: true,
                        minWidth: 50,
                        minHeight: 50
                    }
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

    return <div ref={editorRef}></div>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));