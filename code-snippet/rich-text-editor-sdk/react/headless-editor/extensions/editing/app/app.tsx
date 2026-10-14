import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    textAlignExtension,
    indentOutdentExtension,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

class App extends React.Component {
    private editorRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    private editor: HeadlessEditor | null = null;

    componentDidMount() {
        this.editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                textAlignExtension,
                indentOutdentExtension,
                placeholderExtension
            ],
            enableTabKey: true,
        });
        if (this.editorRef.current) {
            this.editor.mount(this.editorRef.current);
        }
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    render() {
        return <div ref={this.editorRef} />;
    }
}

export default App;