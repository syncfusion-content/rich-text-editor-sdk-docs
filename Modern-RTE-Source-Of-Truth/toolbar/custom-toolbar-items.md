# Custom Toolbar Items in TypeScript Modern Rich Text Editor

Alongside the built-in strings, `toolbarSettings.items` also accepts item objects for tools of your own. Give each one an `actionId` — a unique identifier you'll check for in the `itemClicked` handler — plus the usual presentation properties (`prefixIcon`/`suffixIcon`, `tooltipText`, `align`, `cssClass`, `disabled`, and so on, the same set the underlying EJ2 Toolbar item model uses).

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            {
                id: 'WordCount',
                actionId: 'wordCount',
                prefixIcon: 'e-icons e-numbering-list',
                tooltipText: 'Word count',
                align: 'Left'
            },
            '|', 'Undo', 'Redo'
        ],
        itemClicked: (args: any): void => {
            if (args.item) {
                const words: number = editor.getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    }
});

editor.appendTo('#editor');
```

```html
<html lang="en">

<head>
    <title>Syncfusion Typescript Modern Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript UI Controls">
    <meta name="author" content="Syncfusion">
</head>
    <body>
        <div id='container'>
            <div id='editor'></div>
        </div>
    </body>
      <script type="module" src="index.ts"></script>
</html>
```

## itemClicked Event

Listen for `itemClicked` to know whenever any toolbar button is clicked, before its command runs — this is also how you handle a custom item's action, since custom items don't have a built-in command of their own. The event args' `item` field is the toolbar item's model, so check `args.item.actionId` to identify which custom item was clicked.

Refer to the sample above: clicking the word-count button reads `args.item.actionId`, and if it matches `'wordCount'`, calls `editor.getText()` to count and display the words in the document.

## updatedToolbarStatus Event

The `updatedToolbarStatus` event is raised after the toolbar synchronizes its visual state with the current editor selection or cursor formatting. Its event arguments provide the active inline marks, block-level formats, and resolved font and color styles.

The following example demonstrates how to handle the `updatedToolbarStatus` event and display which text formatting styles (bold, italic, underline, strikethrough) are currently active at the cursor position.

```ts
import { RichTextEditorUI, UpdatedToolbarStatusEventArgs } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        // This event fires whenever the cursor moves or text formatting changes
        updatedToolbarStatus: (args: UpdatedToolbarStatusEventArgs) => {
            const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
            if (logElement && args) {
                // Extract some basic formatting properties from the event arguments
                const activeMarks: any = (args as UpdatedToolbarStatusEventArgs).activeMarks || [];
                // Format a simple readable string for beginners to see what is active
                if ((activeMarks as any).bold && (activeMarks as any).italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Both Bold and Italic format is active';
                }else if ((activeMarks as any).bold) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Bold format is active';
                } else if ((activeMarks as any).italic) {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Italic format is active';
                } else {
                    logElement.innerHTML = '<strong>Active Formats:</strong> Neither Bold nor Italic is active';
                }
            }
        }
    }
});

editor.appendTo('#editor');
```

```html
<html lang="en">

<head>
    <title>Syncfusion Javascript Modern Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript UI Controls">
    <meta name="author" content="Syncfusion">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 20px;
            color: #333;
        }

        .demo-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .event-dashboard {
            margin-top: 15px;
            padding: 12px 20px;
            background: #f8f9fa;
            border: 1px dashed #ced4da;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #event-log {
            font-weight: bold;
            background-color: #e3f2fd;
            color: #0d6efd;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: monospace;
        }
    </style>

</head>

<body>
    <!-- Your Modern Rich Text Editor container -->
    <div id='container'>
        <div class="external-toolbar">
            <button id="boldBtn">Bold</button>
            <button id="underlineBtn">Underline</button>
            <button id="fontSizeBtn">18px Font Size</button>
            <button id="fontColorBtn">Blue Font Color</button>
            <button id="highlightBtn">Highlight</button>
            <button id="clearFormatBtn">Clear Format</button>
        </div>
        <p>Type some text here, make it <strong>bold</strong> or <em>italic</em>, and watch the status below change!</p>
        <div id="editor"></div>
        <!-- Event log display box -->
        <div class="event-dashboard">
            <span id="event-log">
                Action: Click or type inside the editor to see active toolbar status...
            </span>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

## Updating toolbar items at runtime

If your toolbar needs to change based on application state — for example, showing a different set of tools depending on the user's permissions — call `editor.updateToolbarItems(updates)` with a batch of add/remove/reorder operations. The editor reconciles only what actually changed rather than re-rendering the whole toolbar, so things like an open dropdown or current focus aren't disrupted.
