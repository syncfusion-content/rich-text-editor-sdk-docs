import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

import './style.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = null;
        this.editor = null;
    }

    componentDidMount() {
        this.editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                placeholderExtension
            ]
        });

        if (this.containerRef) {
            this.editor.mount(this.containerRef);
        }
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    executeCommand(command) {
        if (
            this.editor &&
            this.editor.commands &&
            typeof this.editor.commands[command] === 'function'
        ) {
            this.editor.commands[command]();
        }
    }

    renderToolbarButton(command, iconClass, label) {
        return (
            <button
                key={command}
                type="button"
                className="toolbar-button"
                title={label}
                aria-label={label}
                onClick={() => this.executeCommand(command)}
            >
                <span className={`e-icons ${iconClass}`} />
            </button>
        );
    }

    render() {
        return (
            <div id="container">
                <div id="toolbar">
                    {this.renderToolbarButton('undo', 'e-undo', 'Undo')}
                    {this.renderToolbarButton('redo', 'e-redo', 'Redo')}

                    <span className="toolbar-separator" />

                    {this.renderToolbarButton('toggleBold', 'e-bold', 'Bold')}
                    {this.renderToolbarButton('toggleItalic', 'e-italic', 'Italic')}
                    {this.renderToolbarButton('toggleUnderline', 'e-underline', 'Underline')}

                    {this.renderToolbarButton(
                        'toggleStrikethrough',
                        'e-strikethrough',
                        'Strikethrough'
                    )}

                    {this.renderToolbarButton(
                        'toggleCodeMark',
                        'e-insert-code',
                        'Inline Code'
                    )}

                    <span className="toolbar-separator" />

                    {this.renderToolbarButton(
                        'toggleBlockQuote',
                        'e-blockquote',
                        'Blockquote'
                    )}

                    {this.renderToolbarButton(
                        'toggleBulletList',
                        'e-list-unordered',
                        'Bullet List'
                    )}

                    {this.renderToolbarButton(
                        'toggleOrderedList',
                        'e-list-ordered',
                        'Ordered List'
                    )}
                </div>

                <div
                    id="headless-editor"
                    ref={(element) => {
                        this.containerRef = element;
                    }}
                />
            </div>
        );
    }
}

export default Editor;