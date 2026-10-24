# Events in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor component emits various events to notify your application about user interactions, state changes, and content modifications. This guide covers all available events and how to handle them.

---

## change

The `change` event is raised whenever the editor content changes, such as when text is inserted, deleted, moved, replaced, or formatted. Its event arguments provide the updated document and selection states, the type of action performed, and the nodes affected by the change.

The following example demonstrates how to handle the `change` event and display the action performed along with the primary affected element.

```ts
import { RichTextEditorUI, ChangeEventArgs } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    change: (args: ChangeEventArgs) => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        const nodeElement: HTMLElement = document.getElementById('affected-node') as HTMLElement;
        if (logElement && nodeElement) {
            // 1. Display the type of action performed (e.g., "Insertion")
            logElement.innerText = `Action: ${args.action || 'Modified'}`;
            // 2. Extract and display the tag/type of the affected node (e.g., "paragraph")
            if (args.affectedNodes && args.affectedNodes.length > 0) {
                const primaryNode: any = args.affectedNodes[0];
                nodeElement.innerText = `Affected Element: <${primaryNode.type}>`;
            } else {
                nodeElement.innerText = 'Affected Element: None';
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

        .badge,
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
        <div id='editor'></div>
        <div class="event-dashboard">
            <span id="event-log">Action: Waiting for input...</span>
            <span id="affected-node" class="badge">Affected Element: None</span>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

---

## created

The `created` event is raised after the Rich Text Editor UI component has been successfully initialized and rendered. Use this event to perform setup tasks that depend on the editor instance or its rendered DOM elements.

The following example demonstrates how to handle the `created` event and display a notification confirming that the editor is ready for interaction.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    // The created event fires immediately after the component is rendered
    created: () => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        if (logElement) {
            // Update the UI text to tell a new user that the component is fully ready
            logElement.innerText = 'Action: Editor is ready for input!';
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
        <div id='editor'></div>
        <div class="event-dashboard">
            <span id="event-log">Action: Waiting for input...</span>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

---

## destroyed

The `destroyed` event is raised when the Rich Text Editor component is destroyed and removed from the application. It can be used to perform cleanup tasks, such as releasing resources, removing event handlers, or resetting related state.

The following example demonstrates how to handle the `destroyed` event and log the destruction notification to confirm cleanup and resource release.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    // The destroyed event fires after the component is removed from the application
    destroyed: () => {
        const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
        if (logElement) {
            // Inform the user that cleanup tasks are executing or complete
            logElement.innerText = 'Action: Editor has been destroyed and resources are cleared!';
        }
    }
});
editor.appendTo( '#editor' );

document.getElementById('destroy-btn').addEventListener('click', () => {
    if (editor) {
        editor.destroy();
    }
});
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
        <div id='editor'></div>
        <div class="event-dashboard">
            <span id="event-log">Action: Waiting for input...</span>
        </div>
        <button id="destroy-btn" style="margin-top: 10px; padding: 8px 12px; background-color: #ff4d4d; color: white; border: none; cursor: pointer;">
            Destroy Editor Component
        </button>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

---

## focus

The `focus` event is raised when the editor receives focus, either through user interaction or a method call. Its event arguments identify the event name, indicate whether the focus was user-initiated, and specify the focus source.

The following example demonstrates how to handle the `focus` event and log a notification indicating that the editor has received focus and is ready for user input.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Raised when the editor receives focus
    focus: () => {
        logEvent('[focus event]: Editor focused.');
    },
    // Raised when the editor loses focus
    blur: () => {
        logEvent('[blur event]: Editor lost focus. Click inside the Editor to focus again.');
    }
});
editor.appendTo( '#editor' );

// Helper function to update the event log in the HTML UI
function logEvent(message: string): void {
    const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
    if (logElement) {
        logElement.innerText = message;
    }
}
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
        <div id='editor'></div>
        <div class="event-dashboard">
            <span id="event-log">
                Click inside the editor to trigger the focus event...
            </span>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

---

## blur

The `blur` event is raised when the editor loses focus, either through user interaction or a method call. Its event arguments identify the event name, indicate whether the blur was caused by user interaction, provide the focus event, and specify the source.

The following example demonstrates how to handle the `blur` event and log a notification indicating that the editor has lost focus and user input has ceased.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Raised when the editor loses focus
    blur: () => {
        logEvent('[blur event]: Editor lost focus.');
    },
    // Raised when the editor receives focus
    focus: () => {
        logEvent('[focus event]: Editor focused. Click outside the Editor to trigger blur event.');
    }
});
editor.appendTo( '#editor' );

// Helper function to update the event log in the HTML UI
function logEvent(message: string): void {
    const logElement: HTMLElement = document.getElementById('event-log') as HTMLElement;
    if (logElement) {
        logElement.innerText = message;
    }
}
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

        .badge,
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
        <div id='editor'></div>
        <div class="event-dashboard">
            <span id="event-log">
                Click inside the editor and click outside the editor to trigger the blur event...
            </span>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

## actionBegin

The `actionBegin` event is raised before an editor action is executed, such as inserting, deleting, formatting, or modifying content. It provides details about the pending action and allows applications to monitor or customize the editor behavior before the operation begins.

The following example demonstrates how to handle the `actionBegin` event and log pre-action events with timestamps to track when operations are initiated before they complete.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';


const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Triggers BEFORE an action takes place (e.g., formatting, inserting images, typing)
    actionBegin: (args: any) => {
        logToConsole('actionBegin', args.action, '#d9534f'); // Highlighted in Red
    },
});
editor.appendTo( '#editor' );

function logToConsole(eventName: string, requestType: string | undefined, color: string): void {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    const emptyMessage: HTMLElement = document.getElementById('empty-message') as HTMLElement;
    if (!logContainer) { return; }
    // Hide the placeholder text once the first event fires
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    const timestamp: any = new Date().toLocaleTimeString();
    const actionLabel: any = requestType ? requestType : 'Generic Action';
    // Create log row element
    const logRow: HTMLElement = document.createElement('div');
    logRow.style.marginBottom = '6px';
    logRow.style.borderLeft = `3px solid ${color}`;
    logRow.style.paddingLeft = '8px';
    logRow.innerHTML = `<strong style="color: ${color}">[${timestamp}] ${eventName}</strong> — <em>Action:</em> ${actionLabel}`;
    // Insert new logs at the top of the logging stream
    logContainer.insertBefore(logRow, logContainer.firstChild);
}

// Clear button logic to wipe console history clean
document.getElementById('clear-btn')?.addEventListener('click', () => {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    if (logContainer) {
        logContainer.innerHTML = '<div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>';
    }
});
```

```html
<html lang="en">

<head>
    <title>Syncfusion Javascript Modern Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript UI Controls">
    <meta name="author" content="Syncfusion">
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
        <div id='editor'></div>
        <div id="logger-panel"
            style="margin-top: 30px; padding: 15px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-family: sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #333;">Live Event Log Console</h4>
                <button id="clear-btn"
                    style="padding: 5px 10px; cursor: pointer; background: #fff; border: 1px solid #ccc; border-radius: 4px;">Clear
                    Logs</button>
            </div>

            <div id="log-container"
                style="max-height: 200px; overflow-y: auto; background: #fff; padding: 10px; border: 1px solid #eee; font-family: monospace; font-size: 13px;">
                <div id="empty-message" style="color: #999; font-style: italic;">
                    No events captured yet. Try typing or formatting some text inside the editor...
                </div>
            </div>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```

---

## actionComplete

The `actionComplete` event is raised after an editor action, such as inserting, deleting, formatting, or modifying content, has been completed. It provides details about the completed action so applications can respond, update related state, or perform follow-up processing.

The following example demonstrates how to handle the `actionComplete` event and log post-action events with timestamps to track when operations have successfully finished and are ready for follow-up processing.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';


const editor: RichTextEditorUI = new RichTextEditorUI( {
    // Triggers AFTER an action successfully completes
    actionComplete: (args: any) => {
        logToConsole('actionComplete', args.action, '#5cb85c'); // Highlighted in Green
    }
});
editor.appendTo( '#editor' );

function logToConsole(eventName: string, requestType: string | undefined, color: string): void {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    const emptyMessage: HTMLElement = document.getElementById('empty-message') as HTMLElement;
    if (!logContainer) { return; }
    // Hide the placeholder text once the first event fires
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    const timestamp: any = new Date().toLocaleTimeString();
    const actionLabel: any = requestType ? requestType : 'Generic Action';
    // Create log row element
    const logRow: HTMLElement = document.createElement('div');
    logRow.style.marginBottom = '6px';
    logRow.style.borderLeft = `3px solid ${color}`;
    logRow.style.paddingLeft = '8px';
    logRow.innerHTML = `<strong style="color: ${color}">[${timestamp}] ${eventName}</strong> — <em>Action:</em> ${actionLabel}`;
    // Insert new logs at the top of the logging stream
    logContainer.insertBefore(logRow, logContainer.firstChild);
}

// Clear button logic to wipe console history clean
document.getElementById('clear-btn')?.addEventListener('click', () => {
    const logContainer: HTMLElement = document.getElementById('log-container') as HTMLElement;
    if (logContainer) {
        logContainer.innerHTML = '<div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>';
    }
});
```

```html
<html lang="en">

<head>
    <title>Syncfusion Javascript Modern Editor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript UI Controls">
    <meta name="author" content="Syncfusion">
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
        <div id='editor'></div>
        <div id="logger-panel"
            style="margin-top: 30px; padding: 15px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-family: sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #333;">Live Event Log Console</h4>
                <button id="clear-btn"
                    style="padding: 5px 10px; cursor: pointer; background: #fff; border: 1px solid #ccc; border-radius: 4px;">Clear
                    Logs</button>
            </div>

            <div id="log-container"
                style="max-height: 200px; overflow-y: auto; background: #fff; padding: 10px; border: 1px solid #eee; font-family: monospace; font-size: 13px;">
                <div id="empty-message" style="color: #999; font-style: italic;">
                    No events captured yet. Try typing or formatting some text inside the editor...
                </div>
            </div>
        </div>
    </div>
</body>
<script type="module" src="index.ts"></script>

</html>
```
