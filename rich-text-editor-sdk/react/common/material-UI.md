---
layout: post
title: Material-UI Integration with React Rich Text Editor SDK | Syncfusion
description: Integrate Material-UI (MUI) components with the React Rich Text Editor, Block Editor, and Markdown Editor for a consistent Material-themed UI.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Material-UI Integration in the React Rich Text Editor SDK

[Material-UI (MUI)](https://mui.com/) provides a comprehensive set of customizable React components that follow Material Design. The Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme aligns with Material-UI's guidelines, so MUI components integrate cleanly with every editor in the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

The integration pattern is the same for all three editors: render MUI components through a `template` slot, or compose them with the editor's content via React state. The example below shows a full integration with the Rich Text Editor, followed by the parallel pattern for the Block Editor and Markdown Editor.

## Set up the React project

1. Use an existing React project or create one. For setup help, see the [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start).
2. Install the MUI dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled --save
```

## Use Material-UI components in the Rich Text Editor

The Rich Text Editor exposes `template` on a custom toolbar item. Pass a function that returns a MUI element, and the editor renders it in place of the default toolbar button.

```tsx
import * as React from 'react';
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';
import { Button } from '@mui/material';

function muiToolbarTemplate(props: { text: string; cssClass?: string }) {
  return <Button variant="contained">{props.text}</Button>;
}

export default function App() {
  const items = [
    { text: 'Insert', template: muiToolbarTemplate, cssClass: 'e-mui-insert' }
  ];
  return (
    <RichTextEditorComponent toolbarSettings={{ items }}>
      <p>Rich Text Editor with a MUI button in the toolbar.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

The MUI button renders inside the editor's toolbar and keeps its Material styling alongside the Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme.

## Use Material-UI components in the other editors

The same pattern works for the Block Editor (custom block `template`) and the Markdown Editor (toolbar `template`). Pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Block Editor %}

```tsx
import * as React from 'react';
import { BlockEditorComponent, BlockModel } from '@syncfusion/ej2-react-blockeditor';
import { Chip } from '@mui/material';

function muiBlockTemplate(props: { label: string }) {
  return <Chip label={props.label} color="primary" />;
}

const MuiBlock: BlockModel = {
  type: 'MuiChip',
  template: muiBlockTemplate
};

export default function App() {
  return (
    <BlockEditorComponent blocks={[MuiBlock]}>
      <div data-type="MuiChip" data-label="Hello" />
    </BlockEditorComponent>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import * as React from 'react';
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';
import { Button } from '@mui/material';

function muiMdToolbarTemplate(props: { text: string }) {
  return <Button variant="contained">{props.text}</Button>;
}

export default function App() {
  const items = [
    { text: 'Insert', template: muiMdToolbarTemplate, cssClass: 'e-mui-insert' }
  ];
  return (
    <MarkdownEditorComponent toolbarSettings={{ items }}>
      <p>Markdown Editor with a MUI button in the toolbar.</p>
      <Inject services={[Toolbar, MarkdownFormatter]} />
    </MarkdownEditorComponent>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

## Run the project

```bash
npm start
```

The output shows the Rich Text Editor (or Block Editor / Markdown Editor) with the MUI component rendered through its template slot, keeping visual consistency with the Syncfusion Material theme.

## Integration considerations

- **Theme consistency** — both libraries use the Material theme, so the Syncfusion Material theme and MUI components share the same visual language.
- **Performance** — for large documents, prefer simple MUI elements in template slots and avoid heavy subtrees inside every toolbar item or block.
- **Styling approach** — MUI uses CSS-in-JS (Emotion) and Syncfusion uses traditional CSS stylesheets; both coexist without conflicts.
- **Templates are stateless-friendly** — pass `'toolbarTemplate'` (Rich Text Editor / Markdown Editor) or the block-template name (Block Editor) through `statelessTemplates` if the template does not depend on React state.

## See also

* [Quick Start for the React Rich Text Editor SDK](../components/rich-text-editor/quick-start)
* [Block Editor — Getting Started](../components/block-editor/getting-started)
* [Markdown Editor — Getting Started](../components/markdown-editor/getting-started)
* [Templates in the React Rich Text Editor SDK](./template)
