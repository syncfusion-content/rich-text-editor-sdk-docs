import * as React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.editor = null;
    }

    componentDidMount() {
        this.editor = ej.headlesseditor.HeadlessEditor.create({
            extensions: [
                ej.headlesseditor.basicExtensions,
                ej.headlesseditor.textAlignExtension,
                ej.headlesseditor.indentOutdentExtension,
                ej.headlesseditor.placeholderExtension
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
        return React.createElement('div', { ref: this.editorRef });
    }
}

export default App;