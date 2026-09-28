import { useEffect, useRef } from 'react';
import { HeadlessEditor, basicExtensions, placeholderExtension } from '@syncfusion/ej2-headless-editor';
 
function Editor() {
    const containerRef = useRef<HTMLDivElement>(null);
 
    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        if (containerRef.current) {
            editor.mount(containerRef.current);
        }
        return () => editor.destroy();
    }, []);
 
    return <div ref={containerRef} />;
}
export default Editor;