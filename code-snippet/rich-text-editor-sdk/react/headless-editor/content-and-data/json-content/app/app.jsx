import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef(null);
    useEffect(() => {
        const headlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        if (editorRef.current) {
            headlessEditor.mount(editorRef.current);
        }
        return () => headlessEditor.destroy();
    }, []);
    return <div id="headless-editor" ref={editorRef}></div>;
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));