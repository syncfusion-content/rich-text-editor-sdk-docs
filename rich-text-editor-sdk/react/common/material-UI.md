---
layout: post
title: Material-UI Integration with React Rich Text Editor | Syncfusion
description: Integrate Material-UI (MUI) components with the Syncfusion React Rich Text Editor toolbar — mount a MUI Button into a custom toolbar slot and trigger editor commands from it.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Material-UI Integration in the React Rich Text Editor

[Material-UI (MUI)](https://mui.com/) provides a comprehensive set of customizable React components that follow Material Design. The Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme aligns with Material-UI's guidelines, so MUI components integrate cleanly with the React Rich Text Editor.

The integration pattern is to render MUI components through a `template` slot on a toolbar item. The editor renders the returned element in place of the default toolbar button.

## Set up the React project

1. Use an existing React project or create one. For setup help, see the [Quick Start for the React Rich Text Editor](../components/rich-text-editor/quick-start).
2. Install the React Rich Text Editor, the Syncfusion Material theme, and the MUI dependencies:

```bash
npm install @syncfusion/ej2-react-richtexteditor @mui/material @emotion/react @emotion/styled --save
```

3. Import the Material theme stylesheet into your app's entry file (for example, `src/index.tsx` or `src/App.tsx`):

```ts
import '@syncfusion/ej2-material-theme/styles/rich-text-editor/index.css';
```

## Use a Material-UI Button inside the toolbar

The example below adds a custom toolbar item whose `template` is a plain `<button>` placeholder. Once the editor is created, the `created` event fires and mounts a MUI `Button` into that placeholder with `ReactDOM.createRoot`. Clicking the button calls `rteObj.executeCommand('insertText', …)` to insert text at the cursor.

```tsx
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';
import { RichTextEditorComponent, HtmlEditor, Toolbar, Inject, ToolbarSettingsModel } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-material-theme/styles/rich-text-editor/index.css';

function App() {
  let rteObj: RichTextEditorComponent;
  let customBtn: HTMLElement;
  let items: object[] = [
    'Bold', 'Italic', 'Underline', '|',
    {
      tooltipText: 'Insert Text',
      template: '<button id="custom_tbar" type="button"></button>'
    },
    '|', 'Undo', 'Redo'
  ];
  const toolbarSettings: ToolbarSettingsModel = {
    items: items
  };
  function onCreate(): void {
    customBtn = document.getElementById('custom_tbar') as HTMLElement;

    ReactDOM.createRoot(customBtn).render(
      <Button
        onClick={() => {
          rteObj.focusIn();
          rteObj.executeCommand(
            'insertText',
            '🚀 Text inserted from Material UI Button'
          );
        }}
        sx={{
          padding: '0px',
          minWidth: 'auto',
          minHeight: 'auto'
        }}
      >
        Insert Text
      </Button>
    );
  }
  return (
    <RichTextEditorComponent
      ref={(scope) => {
        rteObj = scope;
      }}
      toolbarSettings={toolbarSettings}
      created={onCreate}>
      <p>Place cursor and click Insert Text.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}

export default App;
```

The MUI `Button` renders inside the custom toolbar slot. Its `onClick` calls `rteObj.focusIn()` to focus the editor and `rteObj.executeCommand('insertText', …)` to insert the string at the cursor position.

## How it works

1. A `template` string on a toolbar item renders a placeholder `<button id="custom_tbar">` inside the toolbar.
2. The `created` event fires after the editor mounts. Inside it, `ReactDOM.createRoot(customBtn).render(<Button … />)` mounts a MUI `Button` into the placeholder.
3. The `Button`'s `onClick` calls `rteObj.focusIn()` to focus the editor, then `rteObj.executeCommand('insertText', '<text>')` to insert the text at the cursor.
4. The MUI `Button` keeps its Material styling alongside the Syncfusion Material theme.

## Run the project

```bash
npm start
```

The output shows the React Rich Text Editor with a MUI "Insert Text" button in the toolbar. Clicking the button inserts `🚀 Text inserted from Material UI Button` at the cursor.

## Integration considerations

- **Theme consistency** — both libraries use the Material theme, so the Syncfusion Material theme (`@syncfusion/ej2-material-theme`) and MUI components share the same visual language.
- **Performance** — for large documents, prefer simple MUI elements inside custom toolbar slots and avoid heavy subtrees.
- **Styling approach** — MUI uses CSS-in-JS (Emotion) and Syncfusion uses traditional CSS stylesheets; both coexist without conflicts.
- **Mount timing** — the `created` event is the only safe place to mount a React subtree into a toolbar `template` placeholder. Mounting earlier (during render) leaves the placeholder in the DOM but unattached to React.
- **Editor focus** — always call `rteObj.focusIn()` before `executeCommand(...)` so the inserted text lands at the cursor instead of being lost.

## See also

* [Quick Start for the React Rich Text Editor](../components/rich-text-editor/quick-start)
* [Built-in Themes](../themes/built-in-themes)
