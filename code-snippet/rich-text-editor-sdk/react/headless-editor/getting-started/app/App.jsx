import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';
import './index.css';

const App = () => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                placeholderExtension
            ]
        });

        editorRef.current = editor;

        if (containerRef.current) {
            editor.mount(containerRef.current);
        }

        return () => {
            editor.destroy();
            editorRef.current = null;
        };
    }, []);

    return (
        <div id="container">
            <div id="headless-editor" ref={containerRef}></div>
        </div>
    );
};

export default App;