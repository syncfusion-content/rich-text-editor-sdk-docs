# Slash Commands Tutorial

## Introduction

Slash commands are a powerful feature in the RichTextEditorUI that allow users to quickly access formatting options and insert content by typing a forward slash (`/`) followed by a command. They're inspired by modern productivity tools and provide a keyboard-friendly way to work without reaching for toolbar buttons.

---

## Enable Slash Commands

Slash commands are disabled by default. To enable them, set the `enable` property to `true` in the `slashCommandSettings` configuration.

### Step 1: Basic Setup

Here's the simplest way to enable slash commands:

```typescript
import { RichTextEditorUI, Inject, SlashCommands } from '@syncfusion/ej2-richtexteditor-ui';

// Create the RichTextEditorUI with slash commands enabled
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true
  }
});

editor.appendTo('#editor');
```

### Step 2: Test It

1. Click in the editor and type `/`
2. A popup should appear showing available commands
3. Type a command name (e.g., `heading`) to filter the list
4. Press Enter or click to select an item

**Note:** The popup displays by default with all available built-in commands. We'll customize this in later sections.

---

## Module Injection

Slash commands in RichTextEditorUI are powered by the SlashCommands module, which integrates with the editor's architecture to enable `/` -triggered command selection. To use slash commands effectively, you need to inject this module along with other UI modules that provide the formatting capabilities.

### Why Modules Matter

The RichTextEditorUI uses a modular architecture where:
- **SlashCommands Module** — Renders the slash command popup and handles item selection
- **Toolbar Module** — Provides formatting toolbar and command registry
- **Image, Link, Table Modules** — Enable specific insertion and editing features

When you enable slash commands and inject the appropriate modules, users can leverage the full command set through both the toolbar and the slash command popup.

### Step 1: Import Required Modules

```typescript
import { RichTextEditorUI, Inject, SlashCommands, Toolbar, Image, Link, Table, QuickToolbar } from '@syncfusion/ej2-richtexteditor-ui';
```

### Step 2: Inject the Modules

```typescript
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true
  }
});

// Inject all necessary modules
Inject(SlashCommands, Toolbar, Image, Link, Table, QuickToolbar);

editor.appendTo('#editor');
```

### What Each Module Provides

- **SlashCommands** — The core slash command feature that renders the `/` popup
- **Toolbar** — Formatting commands registry and toolbar UI
- **Image** — Image insertion and editing commands
- **Link** — Hyperlink creation commands
- **Table** — Table creation and editing commands
- **QuickToolbar** — Context-sensitive formatting toolbar (appears on selection)

Injecting these modules enables their corresponding slash commands to work properly and ensures the editor can execute the selected commands.

### Module Availability

The RichTextEditorUI provides the following modules in its module directory:
- `base-module.ts` — Core base functionality
- `toolbar.ts` — Toolbar rendering and management
- `image.ts` — Image handling module
- `link-module.ts` — Link handling module
- `table.ts` — Table handling module
- `quick-toolbar.ts` — Quick toolbar popup
- `keybindings.ts` — Keyboard shortcuts management

---

## Available Items

The RichTextEditorUI comes with a comprehensive set of built-in slash command items organized into categories.

### Built-In Commands by Category

#### Basic Block Elements
- **Paragraph** — Insert a regular paragraph (default text block)
- **Heading 1 through Heading 4** — Insert headings at different levels

#### Lists
- **BulletList** — Insert an unordered list
- **NumberedList** — Insert an ordered list
- **Checklist** — Insert a checklist with checkboxes

#### Containers
- **Blockquote** — Insert a block quote for citations or emphasis
- **Table** — Insert a table (requires `Table` module)
- **Collapsible Paragraph** — Insert a collapsible paragraph block
- **Collapsible Heading 1 through Heading 4** — Insert collapsible heading blocks

#### Callout Blocks
- **Info** — Insert an info callout box
- **Warning** — Insert a warning callout box
- **Error** — Insert an error callout box
- **Success** — Insert a success callout box
- **Note** — Insert a note callout box

#### Media & Links
- **Image** — Insert an image (requires `Image` module)
- **Link** — Create a hyperlink (requires `Link` module)

### How to View Available Commands

When you type `/` in the editor, the popup shows all available commands. The commands are:
- Grouped by category (Inline, Basic Block, Media)
- Sorted alphabetically within each group
- Displayed with icons and descriptions
- Filterable by typing the command name

---

## Configure Slash Command Items

You can customize which items appear in the slash command popup. This is useful when:
- Your application only needs specific commands
- You want to streamline the user experience
- You're adding custom commands alongside built-in ones

### Step 1: Filter Built-In Commands

To show only specific commands, pass an array of command names to the `items` property:

```typescript
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'BulletList', 'NumberedList', 'Table', 'Image']
  }
});

Inject(SlashCommands, Toolbar, Table, Image, QuickToolbar);

editor.appendTo('#editor');
```

In this example:
- Only 7 commands are available
- Headings 3 and 4 are not shown
- Callout blocks are not shown
- The popup will be smaller since fewer items are displayed

### Step 2: Verify Your Configuration

1. Type `/` in the editor
2. Only the items you specified should appear
3. The list should reflect your filtered selection

### Default Items

If you don't specify the `items` array, all 22 built-in commands are shown by default:

```
['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'NumberedList', 
'BulletList', 'Checklist', 'Blockquote', 'Table', 'Link', 'Image', 'Collapsible Paragraph', 
'Collapsible Heading 1', 'Collapsible Heading 2', 'Collapsible Heading 3', 'Collapsible Heading 4', 
'Info', 'Warning', 'Error', 'Success', 'Note']
```

---

## Customize the Slash Command Popup

The slash command popup's size can be customized to fit your application's layout and design.

### Popup Width Configuration

The `popupWidth` property controls the popup's horizontal size. It accepts:
- **Pixels:** `'300px'`, `'250px'`
- **Numbers:** `300` (treated as pixels)
- **Percentages:** `'50%'`, `'100%'`

#### Example: Set Popup Width

```typescript
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    popupWidth: '350px'  // Wider popup for better readability
  }
});

Inject(SlashCommands, Toolbar);

editor.appendTo('#editor');
```

**Default:** `'300px'`

### Popup Height Configuration

The `popupHeight` property controls the popup's vertical size. It accepts the same formats as width:
- **Pixels:** `'320px'`, `'400px'`
- **Numbers:** `320` (treated as pixels)
- **Percentages:** `'60%'`, `'80%'`

#### Example: Set Popup Height

```typescript
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    popupHeight: '400px'  // Taller popup to show more commands at once
  }
});

Inject(SlashCommands, Toolbar);

editor.appendTo('#editor');
```

**Default:** `'320px'`

### Complete Customization Example

```typescript
const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'BulletList', 'NumberedList', 'Table'],
    popupWidth: '320px',    // Slightly wider
    popupHeight: '350px'    // Slightly taller
  }
});

Inject(SlashCommands, Toolbar, Table);

editor.appendTo('#editor');
```

### Best Practices

- **Width:** Set between 250px and 400px for optimal usability
- **Height:** Adjust based on the number of items you're displaying
- **Responsive Design:** Use percentages for mobile-friendly layouts (e.g., `'90%'` width)
- **Test:** Verify the popup displays correctly on your target devices

---

## 6. Add Custom Slash Command Items

Extend the slash command functionality by creating custom commands tailored to your application's needs.

### Understanding Custom Items

A custom slash command item is defined by:
- **text** — The label shown in the popup
- **command** — The command identifier (used internally)
- **description** — Tooltip or helper text
- **iconCss** — CSS class for the icon
- **type** — Category grouping (e.g., 'Basic Block', 'Media', 'Inline')

### Step 1: Define a Custom Item

Here's a complete example that adds a custom "Code Block" command:

```typescript
import { RichTextEditorUI, Inject, SlashCommands, Toolbar, ISlashCommandItem } from '@syncfusion/ej2-richtexteditor-ui';

const customCodeBlockItem: ISlashCommandItem = {
  text: 'Code Block',
  command: 'codeBlock',
  description: 'Insert a code block',
  iconCss: 'e-icons e-code',
  type: 'Basic Block'
};

const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', customCodeBlockItem]  // Mix built-in and custom items
  }
});

Inject(SlashCommands, Toolbar);

editor.appendTo('#editor');
```

### Step 2: Handle the Custom Command

When a user selects your custom item, you need to define what action to take. This is done using the `itemSelect` event (covered in the next section).

### Step 3: Create Multiple Custom Items

```typescript
const customItems: ISlashCommandItem[] = [
  {
    text: 'Snippet',
    command: 'snippet',
    description: 'Insert a code snippet',
    iconCss: 'e-icons e-snippet',
    type: 'Media'
  },
  {
    text: 'Alert Box',
    command: 'alertBox',
    description: 'Insert an alert notification',
    iconCss: 'e-icons e-alert',
    type: 'Basic Block'
  },
  {
    text: 'Custom Widget',
    command: 'customWidget',
    description: 'Insert a custom widget',
    iconCss: 'e-icons e-widget',
    type: 'Media'
  }
];

const editor = new RichTextEditorUI({
  slashCommandSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'BulletList', ...customItems]
  }
});

Inject(SlashCommands, Toolbar);

editor.appendTo('#editor');
```

---

## 7. Use the `itemSelect` Event

The `itemSelect` event fires when a user selects a slash command item. Use it to:
- Handle custom commands with your own logic
- Modify default command behavior
- Log analytics or track usage
- Prevent default execution if needed
