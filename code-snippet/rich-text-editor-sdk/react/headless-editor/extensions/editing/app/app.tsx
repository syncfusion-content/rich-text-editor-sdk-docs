import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    textAlignExtension,
    indentOutdentExtension,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

export default class App extends React.Component {
    private editorRef: HTMLDivElement | null = null;
    private editor: any = null;

    componentDidMount() {
        this.editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                textAlignExtension,
                indentOutdentExtension,
                placeholderExtension
            ],
            enableTabKey: true
        });

        if (this.editorRef) {
            this.editor.mount(this.editorRef);
        }
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    render() {
        return <div ref={(el) => { this.editorRef = el; }} />;
    }
}
