---
layout: post
title: Link Settings in React Modern Rich Text Editor | Syncfusion
description: Learn how to configure link creation, default target, protocol handling, and allowed protocols in the React Modern Rich Text Editor through linkSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Link Settings in React Modern Rich Text Editor

The **Link Settings** govern how hyperlinks are created, normalized, and validated inside the editable area — covering automatic link creation when a URL is pasted over selected text, the default target applied to newly created links, protocol normalization for URLs that lack one, and the allow-list of accepted URL protocols.

`linkSettings` is wired through `RichTextEditorUIComponent.linkSettings` and has five properties:

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `linkOnPaste` | `boolean` | `true` | When `true`, pasting a URL over selected text converts it into a link. |
| `defaultTarget` | `string` | `'_blank'` | Default `target` applied to newly created links (`''`, `'_self'`, `'_blank'`, `'_parent'`, `'_top'`). |
| `autoPrependProtocol` | `boolean` | `true` | When `true`, prepends `defaultProtocol` to URLs that do not contain one. |
| `defaultProtocol` | `string` | `'https'` | Protocol prepended when `autoPrependProtocol` is `true` and the URL has no protocol. Must be present in `allowedProtocols`. |
| `allowedProtocols` | `string[]` | `['http', 'https', 'mailto', 'tel']` | Allow-list for accepted URL protocols. URLs whose protocol is outside this list are rejected. |

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-settings/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-settings/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-settings/" %}

> If `defaultProtocol` is **not** present in `allowedProtocols`, the editor logs a warning and silently falls back to the first entry of `allowedProtocols`. Add your default to the allow-list, or change `defaultProtocol` to one that already exists.

---

## 1. Paste link as text

`linkSettings.linkOnPaste` controls what happens when the user pastes a URL over a non-collapsed text selection inside the editor.

| Value | Behavior |
| --- | --- |
| `true` (default) | The pasted URL replaces the selection and is converted into a hyperlink. The link uses the editor's `defaultTarget`, `defaultProtocol`, and `autoPrependProtocol` settings. |
| `false` | The pasted URL replaces the selection as plain text. No `<a>` element is created. |

`linkOnPaste` only triggers for **URL-like** payloads:

- A URL with a protocol such as `https://example.com` or `mailto:foo@bar.com`.
- A protocol-less host such as `www.example.com` or `example.com/path`.
- A relative URL starting with `/`, `?`, or `#`.

A paste whose payload contains whitespace, or that is plain text with a URL inside it, is treated as a normal paste and is **not** auto-linked.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-on-paste/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-on-paste/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/link-on-paste/" %}

> When `autoPrependProtocol` is `true` and the pasted URL has no protocol, the editor prepends `defaultProtocol` (for example `https://`) before dispatching the `link` command.

---

## 2. Always Open link in new tab

`linkSettings.defaultTarget` sets the `target` attribute applied to hyperlinks the editor creates through the Insert-Link dialog or through `linkOnPaste`. The supported values mirror the standard HTML `target` attribute.

| Value | Behavior |
| --- | --- |
| `''` | No `target` attribute is set — the link navigates in the current browsing context. |
| `'_self'` | Opens in the same browsing context (the default browser behavior). |
| `'_blank'` (default) | Opens in a new tab or window. |
| `'_parent'` | Opens in the parent browsing context, if any. |
| `'_top'` | Opens in the topmost browsing context, breaking out of any nested frames. |

The Insert-Link dialog exposes an **"Open link in new window"** checkbox. When checked, the new link gets `target="_blank"`. When unchecked, the link gets `linkSettings.defaultTarget`.

```ts
<RichTextEditorUIComponent
  linkSettings={{
    defaultTarget: '_blank'
  }}
/>
```

> The Link Quick Toolbar's `Open` item always uses `window.open(href, target || '_blank')` — so a link with no `target` still opens in a new tab from the quick toolbar.

---

## 3. Configure Available Protocols

`linkSettings.autoPrependProtocol` and `linkSettings.defaultProtocol` work as a pair: when `autoPrependProtocol` is `true`, URLs typed into the Insert-Link dialog or pasted over a selection that lack a protocol are prefixed with `defaultProtocol` (for example `https://`). When `autoPrependProtocol` is `false`, the URL is left untouched and is inserted exactly as typed.

| `autoPrependProtocol` | `defaultProtocol` | URL typed | URL stored as |
| --- | --- | --- | --- |
| `true` | `'https'` | `example.com/page` | `https://example.com/page` |
| `true` | `'http'` | `example.com/page` | `http://example.com/page` |
| `false` | `any` | `example.com/page` | `example.com/page` |
| `true` | `any` | `https://example.com` | `https://example.com` (untouched) |

The Insert-Link dialog renders a protocol dropdown next to the URL input when `autoPrependProtocol` is `true`. The dropdown is populated from `allowedProtocols`, and the initial selection is `defaultProtocol`. As the user types in the URL input, the dropdown auto-syncs to the protocol it can detect.

```ts
<RichTextEditorUIComponent
  linkSettings={{
    autoPrependProtocol: true,
    defaultProtocol: 'https'
  }}
/>
```

> Relative URLs that start with `/`, `?`, or `#` are never prepended — they are always inserted as typed.

---

## 4. Default Protocol

`linkSettings.defaultProtocol` selects which protocol is prepended to protocol-less URLs when `autoPrependProtocol` is `true`. It is also the initial selection in the Insert-Link dialog's protocol dropdown.

The value must be one of the entries in `allowedProtocols` (matched case-insensitively). The editor logs a warning and falls back to `allowedProtocols[0]` if it cannot find a match.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/default-protocol/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/default-protocol/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/default-protocol/" %}

---

## 5. Configure Allowed Protocols

`linkSettings.allowedProtocols` is the allow-list applied to URL **validation** in two places:

1. The Insert-Link dialog validates the URL input on every keystroke. A URL whose protocol is outside the allow-list is marked with the `e-error` CSS class, and the Insert / Update button refuses to submit.
2. The `linkOnPaste` flow validates the pasted URL the same way. A URL whose protocol is outside the allow-list falls through to plain-text paste.

Relative URLs (`/foo`, `?bar=1`, `#section`) skip protocol validation.

### Built-in entries

The default allow-list is `['http', 'https', 'mailto', 'tel']`. These protocols cover the four link shapes the editor creates out of the box:

| Entry | Use case |
| --- | --- |
| `http` | Plain HTTP URLs. |
| `https` | Secure HTTP URLs. |
| `mailto` | `mailto:user@example.com` links that open the user's mail client. |
| `tel` | `tel:+15551234567` links that open the dialer. |

### Adding `sms` or `ftp`

Extend `allowedProtocols` to accept protocols that are not in the default allow-list. Each entry is matched case-insensitively against the protocol parsed from the URL.

```ts
<RichTextEditorUIComponent
  linkSettings={{
    allowedProtocols: ['http', 'https', 'mailto', 'tel', 'sms', 'ftp'],
    defaultProtocol: 'https'
  }}
/>
```

### Restricting to a single protocol

To restrict the editor to one protocol, list only that protocol in `allowedProtocols`. The Insert-Link dialog's protocol dropdown collapses to that single entry, and `linkOnPaste` falls through to plain text for any other URL shape.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/restrict-single-scheme/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/restrict-single-scheme/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/links/restrict-single-scheme/" %}

> Protocols that can execute scripts (`javascript:`, `data:`) are **not** included in the default allow-list. The editor never validates URLs whose protocol is outside `allowedProtocols` as a successful link — the URL is rejected at dialog validation and at `linkOnPaste`.

---

## See also

* [Link Quick Toolbar](link-quick-toolbar) — the contextual popup with Open / Copy / Edit / Remove that surfaces the most common link actions when the caret sits inside an `<a>` element.
* [Quick Toolbar](../quick-toolbar) — the parent `quickToolbarSettings` surface and the other contextual popups (`text`, `image`, `table`).
* [Getting Started](../getting-started) — install the Modern Rich Text Editor and render your first `RichTextEditorUIComponent` instance.
* [Migration](../migration) — map legacy `RichTextEditor` properties over to `RichTextEditorUIComponent` and the `commands()` builder.
