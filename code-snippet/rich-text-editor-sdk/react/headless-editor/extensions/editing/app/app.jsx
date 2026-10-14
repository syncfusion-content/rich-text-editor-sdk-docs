import * as React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = null;
        this.editor = null;
    }

    componentDidMount() {
        this.editor = HeadlessEditor.create({
            extensions: [
                ej.headlesseditor.basicExtensions,
                ej.headlesseditor.textAlignExtension,
                ej.headlesseditor.indentOutdentExtension,
                ej.headlesseditor.placeholderExtension
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
