# Getting started in Syncfusion JavaScript Modern Rich Text Editor

The Syncfusion JavaScript Modern Rich Text Editor is a WYSIWYG control for creating, editing, and formatting rich text content. This guide explains how to set up and use the Modern Rich Text Editor in a Vite-based TypeScript project, the basic configuration surface, the placeholder, and the accessibility capabilities the component provides.

## Table of contents

- [Prerequisites](#prerequisites)
- [Create a TypeScript application](#create-a-typescript-application)
- [Adding the Modern Rich Text Editor package](#adding-the-modern-rich-text-editor-package)
- [Adding a CSS reference](#adding-a-css-reference)
- [Adding the Modern Rich Text Editor control](#adding-the-modern-rich-text-editor-control)
- [Run the application](#run-the-application)
- [Set editor content](#set-editor-content)
- [Set content format](#set-content-format)
- [Configure toolbar options](#configure-toolbar-options)
- [Configure image settings](#configure-image-settings)
- [Set placeholder text](#set-placeholder-text)
- [Accessibility](#accessibility)

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js `24.13.0` or `higher` before proceeding.

## Create a TypeScript application

To set up a TypeScript application, run the following command.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```

This command will prompt you to install the required packages and start the application. Select the **No** option.

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Adding the Modern Rich Text Editor package

All the available Essential JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install the Modern Rich Text Editor control, use the following command:

```bash
npm install @syncfusion/ej2-richtexteditor-ui
```

## Adding a CSS reference

Syncfusion provides multiple themes for the Modern Rich Text Editor control. For a complete list of available themes, refer to the [themes packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into `src/style.css`.

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor-ui/index.css';
```

> To apply the application-specific styles correctly, import **style.css** into **src/main.ts** and remove all the default styles from **src/style.css** and use the Modern Rich Text Editor styles provided above.

## Adding the Modern Rich Text Editor control

Now, you can start adding the Modern Rich Text Editor control to the application. For getting started, add the Modern Rich Text Editor initialization code in the **src/main.ts** file and add the target element in the **index.html** file using the following sample.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
const editor: RichTextEditorUI = new RichTextEditorUI({});
editor.appendTo('#editor');
```

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor-ui/index.css';
```

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Syncfusion JavaScript Modern Rich Text Editor</title>
</head>

<body>
  <div id="editor"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>
```

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

## Set editor content

After initializing the Modern Rich Text Editor, configure the properties that define its initial content, content format, toolbar options, image handling behavior, and editing experience. These settings establish the editor's default configuration and provide a foundation for further customization based on application requirements.

```ts
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const hostUrl: string = 'https://services.syncfusion.com/js/production/';
const editor: RichTextEditorUI = new RichTextEditorUI({
    value: '<p>Getting started with the Rich Text Editor UI.</p>',
    valueFormat: 'html',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    },
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        maxFileSize: 30000000,
        uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
        imageUrl: hostUrl + 'RichTextEditor/'
    }
});

editor.appendTo('#editor');
```

Configure the `value` property to load content when the editor is initialized. This is commonly used to display existing content for editing or to provide starter content.

```ts
value: '<p>Getting started with the Rich Text Editor UI.</p>'
```

## Set content format

Before setting editor content, choose the appropriate `valueFormat`. Use `html` when working with HTML strings and `json` when storing or exchanging content using the editor's structured document model.

```ts
valueFormat: 'html'
```

Supported values:

- `'json'` — Uses the structured document model.
- `'html'` — Uses HTML string content.

> `valueFormat` is set to **`'json'`** by default. Set it to **`'html'`** when loading editor content as an HTML string.

## Configure toolbar options

Configure `toolbarSettings.items` to display only the editing tools required by your application. Keeping the toolbar focused helps simplify the editing experience and reduces unnecessary commands.

```ts
toolbarSettings: {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
}
```

## Configure image settings

Configure `imageSettings` to control how images are uploaded and validated. You can specify accepted file types, file size limits, and server endpoints used for upload and removal operations.

```ts
var hostUrl: string = 'https://services.syncfusion.com/js/production/';
imageSettings: {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000,
    uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
    removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
    imageUrl: hostUrl + 'RichTextEditor/'
}
```

## Set placeholder text

Use the `placeholder` property to display instructional text when the editor is empty. This helps users understand what content is expected before they start typing.

```ts
placeholder: 'Type something.'
```

## Accessibility

The Modern Rich Text Editor control is designed with accessibility in mind, adhering to WAI-ARIA specifications and implementing ARIA roles, states, and properties. This ensures full accessibility support, making it user-friendly for people who rely on assistive technologies (AT) or keyboard navigation.

The accessibility compliance for the Modern Rich Text Editor control is outlined below.

| Accessibility Criteria | Compatibility |
| --- | --- |
| WCAG 2.2 Support | Yes |
| Section 508 Support | Yes |
| Screen Reader Support | Yes |
| Right-To-Left Support | Yes |
| Color Contrast | Intermediate |
| Mobile Device Support | Yes |
| Keyboard Navigation Support | Yes |
| Accessibility Checker Validation | Intermediate |
| Axe-core Accessibility Validation | Yes |

### ARIA attributes

The toolbar in the Modern Rich Text Editor is assigned the role of `Toolbar` and includes the following attributes.

| Property | Functionalities |
| --- | --- |
| `role="toolbar"` | This attribute added to the ToolBar element describes the actual role of the element. |
| `aria-orientation` | Indicates the ToolBar orientation. Default value is `horizontal`. |
| `aria-disabled` | Indicates the disabled state of the toolbar. |

The Modern Rich Text Editor element is assigned the role of `application`.

| Property | Functionalities |
| --- | --- |
| `role="application"` | This attribute added to the Modern Rich Text Editor element describes the actual role of the element. |
| `aria-disabled` | Indicates the disabled state of the ToolBar. |

### Keyboard navigation

The Modern Rich Text Editor component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation.

### Implementing accessibility best practices

The Rich Text Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.