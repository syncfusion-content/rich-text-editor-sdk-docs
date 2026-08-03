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

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components can be styled using the popular [styled-components](https://styled-components.com/) library. This lets you scope and override the component styles using tagged template literals, keeping styling co-located with the component.

## Installation

```bash
npm install styled-components
```

## Overriding Rich Text Editor styles

Wrap the Rich Text Editor in a styled container and override the component's CSS classes (which are prefixed with `e-`):

```tsx
import styled from 'styled-components';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

const StyledEditorWrapper = styled.div`
  .e-richtexteditor .e-toolbar {
    background-color: #f5f5f5;
  }
  .e-richtexteditor .e-rte-content {
    font-family: 'Segoe UI', sans-serif;
  }
`;

export default function App() {
  return (
    <StyledEditorWrapper>
      <RichTextEditorComponent>
        <p>Type or paste your content here.</p>
      </RichTextEditorComponent>
    </StyledEditorWrapper>
  );
}
```

> Because Syncfusion<sup style="font-size:70%">&reg;</sup> styles are global, prefer scoping overrides within a wrapper element to avoid affecting other component instances.

## See also

* [Built-in Themes](./built-in-themes)
* [CSS Variables](./css-variables)
* [Style Encapsulation](../rich-text-editor/style-encapsulation)
