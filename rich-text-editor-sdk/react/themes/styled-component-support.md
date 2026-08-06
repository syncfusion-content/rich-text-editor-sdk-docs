---
layout: post
title: Styled Component Support in React Rich Text Editor SDK | Syncfusion
description: Learn how to apply and customize Syncfusion React Rich Text Editor SDK styles using styled-components in React applications.
platform: rich-text-editor-sdk
control: Styled Component Support
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Styled Component Support

> This topic applies to **React** only.

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — can be styled using the popular [styled-components](https://styled-components.com/) library. `styled-components` lets you scope and override the editor's CSS classes using tagged template literals, keeping styling co-located with the component.

## Installation

```bash
npm install styled-components
```

## Basic usage

Wrap an editor in a styled container and override its CSS classes (which are prefixed with `e-`). Pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import styled from 'styled-components';
import {
  RichTextEditorComponent, Inject, Toolbar, HtmlEditor
} from '@syncfusion/ej2-react-richtexteditor';

const StyledEditor = styled.div`
  .e-richtexteditor .e-toolbar {
    background-color: #f5f5f5;
  }
  .e-richtexteditor .e-rte-content {
    font-family: 'Segoe UI', sans-serif;
  }
`;

export default function App() {
  return (
    <StyledEditor>
      <RichTextEditorComponent>
        <p>Type or paste your content here.</p>
        <Inject services={[Toolbar, HtmlEditor]} />
      </RichTextEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```tsx
import styled from 'styled-components';
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';

const StyledEditor = styled.div`
  .e-blockeditor .e-toolbar {
    background-color: #f5f5f5;
  }
  .e-blockeditor .e-content {
    font-family: 'Segoe UI', sans-serif;
  }
`;

export default function App() {
  return (
    <StyledEditor>
      <BlockEditorComponent blocks={[ParagraphBlock]}>
        <p>Start writing your content...</p>
      </BlockEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import styled from 'styled-components';
import {
  MarkdownEditorComponent, Inject, Toolbar, MarkdownFormatter
} from '@syncfusion/ej2-react-markdowneditor';

const StyledEditor = styled.div`
  .e-md-editor .e-toolbar {
    background-color: #f5f5f5;
  }
  .e-md-editor .e-rte-content {
    font-family: 'Segoe UI', sans-serif;
  }
`;

export default function App() {
  return (
    <StyledEditor>
      <MarkdownEditorComponent>
        <p>Type or paste your content here.</p>
        <Inject services={[Toolbar, MarkdownFormatter]} />
      </MarkdownEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

> Always target the editor's root class selector (for example, `.e-richtexteditor`, `.e-blockeditor`, or `.e-md-editor`) so styles apply correctly. More specific or nested selectors may require higher specificity or `!important` in complex scenarios.

## Dynamic styling with props

Dynamic styling lets you change the editor's appearance based on props passed to the styled wrapper. For example, switch the toolbar background when a `dark` prop is `true`:

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```tsx
import styled, { css } from 'styled-components';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

const StyledEditor = styled.div<{ dark?: boolean }>`
  .e-richtexteditor .e-toolbar {
    ${props => props.dark && css`
      background-color: #1f1f1f;
      color: #fff;
    `}
  }
`;

export default function App() {
  return (
    <StyledEditor dark={true}>
      <RichTextEditorComponent>
        <p>Type or paste your content here.</p>
      </RichTextEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```tsx
import styled, { css } from 'styled-components';
import { BlockEditorComponent, ParagraphBlock } from '@syncfusion/ej2-react-blockeditor';

const StyledEditor = styled.div<{ dark?: boolean }>`
  .e-blockeditor .e-toolbar {
    ${props => props.dark && css`
      background-color: #1f1f1f;
      color: #fff;
    `}
  }
`;

export default function App() {
  return (
    <StyledEditor dark={true}>
      <BlockEditorComponent blocks={[ParagraphBlock]}>
        <p>Start writing your content...</p>
      </BlockEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```tsx
import styled, { css } from 'styled-components';
import { MarkdownEditorComponent } from '@syncfusion/ej2-react-markdowneditor';

const StyledEditor = styled.div<{ dark?: boolean }>`
  .e-md-editor .e-toolbar {
    ${props => props.dark && css`
      background-color: #1f1f1f;
      color: #fff;
    `}
  }
`;

export default function App() {
  return (
    <StyledEditor dark={true}>
      <MarkdownEditorComponent>
        <p>Type or paste your content here.</p>
      </MarkdownEditorComponent>
    </StyledEditor>
  );
}
```

{% endtabcontent %}

{% endtabcontents %}

> Because Syncfusion<sup style="font-size:70%">&reg;</sup> styles are global, prefer scoping overrides within a wrapper element to avoid affecting other component instances.

## See also

* [Built-in Themes](./built-in-themes)
* [CSS Variables](./css-variables)
* [Style Encapsulation](../components/rich-text-editor/style-encapsulation)
