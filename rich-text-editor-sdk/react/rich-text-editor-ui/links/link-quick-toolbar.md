---
layout: post
title: Link Quick Toolbar in React Modern Rich Text Editor | Syncfusion
description: Learn how to configure the link quick toolbar in the React Modern Rich Text Editor through quickToolbarSettings.link and the available built-in items.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Link Quick Toolbar in React Modern Rich Text Editor

The **Link Quick Toolbar** is the contextual popup that opens when the caret enters an `<a>` element inside the editable area. It surfaces the most relevant link commands — Open, Copy, Edit, Remove — without requiring the user to reach for the main toolbar.

It is wired through `quickToolbarSettings.link` on `RichTextEditorUIComponent`:

```ts
type LinkQuickToolbarItem = 'Open' | 'Copy' | 'Edit' | 'Remove' | '|' | CustomToolbarItem;
```

{% raw %}
```ts
<RichTextEditorUIComponent
  quickToolbarSettings={{
    enable: true,
    link: ['Open', 'Copy', 'Edit', 'Remove']
  }}
/>
```
{% endraw %}

By default, `quickToolbarSettings.link` is set to `['Open', 'Copy', 'Edit', 'Remove']`. To disable the Link Quick Toolbar without disabling the rest of the quick toolbar system, set `link: []` or `link: null` — the toolbar is only instantiated when `link` is a non-empty array.

> See [Quick Toolbar](../quick-toolbar) for the parent `quickToolbarSettings` shape, the `enable` master switch, and `appendTo` for clipping inside narrow containers.

---

## Available items

The Link Quick Toolbar accepts the `LinkQuickToolbarItem` union, which narrows the available identifiers to the four link-specific commands plus a visual separator and any user-supplied custom item.

### Built-in items

| Identifier | Behaviour |
| --- | --- |
| `Open` | Opens the link `href` in a new tab using `window.open(href, target  `&#124; &#124;` '_blank')`. The link's own `target` attribute is honored when present. |
| `Copy` | Copies the link `href` to the clipboard as both `text/plain` and `text/html` (using `navigator.clipboard.write` with a `ClipboardItem`). |
| `Edit` | Opens the Insert-Link dialog pre-filled with the link's current `href`, `text`, `title`, and `target` attributes. |
| `Remove` | Unlinks the selection — removes the `<a>` wrapper but keeps the link's text content. |
|  &#124; | Visual separator used to split action groups inside the popup. |
| `CustomToolbarItem` | A user-defined item routed through `toolbarSettings.itemClicked`. |

### Default configuration

The default `link` array is:

```ts
link: ['Open', 'Copy', 'Edit', 'Remove']
```

The order is significant — items render left-to-right in the array order, separated visually by the popup's tip-pointer logic. To rearrange the buttons, supply the items in the order you want.

### Default-link toolbar surface

The Link Quick Toolbar is **not** rendered until the caret enters an `<a>` element. The toolbar is governed by:

- `quickToolbarSettings.enable` — master switch. When `false`, no quick toolbars (text, link, image, table) are rendered.
- `quickToolbarSettings.link` — the items array. When empty or `null`, the link quick toolbar is not instantiated.
- `toolbarSettings.enable` — when `false`, the Link Quick Toolbar is also disabled (it requires the main toolbar subsystem to be enabled).

{% raw %}
```ts
<RichTextEditorUIComponent
  quickToolbarSettings={{
    enable: true,
    link: ['Open', 'Copy', 'Edit', 'Remove']
  }}
/>
```
{% endraw %}

> When `link` is configured, the toolbar is positioned directly above the link element using the same tip-pointer logic as the text quick toolbar (top-position collision flipping).

### Customizing the items

`link` accepts any of the `LinkQuickToolbarItem` union members:

| Item form | Example | Purpose |
| --- | --- | --- |
| Built-in identifier | `'Open'` | Use the editor's built-in handler. |
| Custom item | `{ actionId: 'bookmark', id: 'bookmark', text: 'Bookmark link' }` | Wire a user-defined action that branches on `toolbarSettings.itemClicked`. |
| Separator | &#124; | Visual divider between groups. |

The example below adds a custom "Bookmark" item alongside the four built-ins, then routes the click through `toolbarSettings.itemClicked`:

{% raw %}
```ts
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';
import React, { useRef } from 'react';

interface ClickedArgs {
    item?: { id?: string; actionId?: string };
    event?: Event;
}

function App() {
    const editorRef = useRef<RichTextEditorUIComponent>(null);

    const handleItemClicked = (args: ClickedArgs): void => {
        if (args.item && args.item.actionId === 'bookmark') {
            // dispatch your bookmark logic here
        }
    };

    return (
        <RichTextEditorUIComponent
            ref={editorRef}
            toolbarSettings={{
                itemClicked: handleItemClicked
            }}
            quickToolbarSettings={{
                enable: true,
                link: [
                    'Open', 'Copy',
                    '|',
                    {
                        actionId: 'bookmark',
                        id: 'bookmark',
                        text: 'Bookmark',
                        tooltipText: 'Bookmark this link'
                    },
                    '|',
                    'Edit', 'Remove'
                ]
            }}
        />
    );
}

export default App;
```
{% endraw %}

### Link Quick Toolbar behaviour

| Trigger | What happens |
| --- | --- |
| Caret enters an `<a>` (mouseup or keyup) | The toolbar opens above the link element. |
| Caret leaves an `<a>` | The toolbar closes. |
| `Escape` key | The toolbar closes. |
| Outside mouse-down | The toolbar closes. |
| User clicks `Remove` | The link is unwrapped and the toolbar closes (the caret no longer sits in a link). |
| User clicks `Edit` | The toolbar closes and the Insert-Link dialog opens pre-filled. |

---

## See also

* [Quick Toolbar](../quick-toolbar) — the parent `quickToolbarSettings` surface and the four built-in sub-arrays (`text`, `image`, `link`, `table`) the Link Quick Toolbar is part of.
* [Link Settings](settings) — `linkSettings` controls how links are created, normalized, validated, and given a default `target` when the Insert-Link dialog opens over them.
* [Getting Started](../getting-started) — install the Modern Rich Text Editor and render your first `RichTextEditorUIComponent` instance.
* [Migration](../migration) — map legacy `RichTextEditor` properties over to `RichTextEditorUIComponent` and the `commands()` builder.
