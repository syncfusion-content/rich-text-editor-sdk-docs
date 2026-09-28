---
layout: post
title: Content Expressions in JavaScript Headless Editor | Syncfusion
description: Use the NodeContent builder to write content rules for NodeDefinition in the JavaScript Headless Editor.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Content Expressions in JavaScript Headless Editor

Every node in the schema declares how its content should be. Headless Editor uses a fluent builder called `NodeContent` for this. Instead of writing fragile content strings, you compose `NodeContent` expressions and pass them to a `NodeDefinition`'s `content` field.

## Why a builder?

Content expressions describe allowed children with a small grammar. For ex, `block*`, etc. Writing that grammar as a raw string is error-prone. `NodeContent` exposes each piece as user friendly method so your content rules are type-checked and easy to read.

```javascript
var customParagraph = ej.headlesseditor.defineExtension({
  name: 'paragraph',
  nodes: function () {
    return [
      {
        name: 'paragraph',
        group: 'block',
        content: ej.headlesseditor.NodeContent.inline().zeroOrMore()
      }
    ];
  }
});
```

## Required content

Start an expression with one of the four factory methods. By default the resulting expression requires exactly one of the chosen kind.

| Factory | Matches |
|---------|---------|
| `NodeContent.block()` | Any node in the `'block'` group. |
| `NodeContent.inline()` | Any node in the `'inline'` group. |
| `NodeContent.text()` | The `text` leaf node. |
| `NodeContent.node(name)` | A specific named node type. |

```javascript
ej.headlesseditor.NodeContent.node('paragraph');     // exactly one paragraph
ej.headlesseditor.NodeContent.inline();              // exactly one inline node
```

## Optional content

Append `.optional()` to make the expression match zero or one of its target.

```javascript
ej.headlesseditor.NodeContent.node('caption').optional();   // zero or one caption
```

## Repeated content

Append a quantifier method to allow the expression to repeat.

| Quantifier | Meaning | Compiles to |
|------------|---------|-------------|
| `.zeroOrMore()` | Zero or more | `name*` |
| `.oneOrMore()` | One or more | `name+` |
| `.optional()` | Zero or one | `name?` |
| `.exactly(n)` | Exactly `n` | `name{n}` |
| `.atLeast(n)` | `n` or more | `name{n,}` |

```javascript
ej.headlesseditor.NodeContent.inline().zeroOrMore();          // inline*
ej.headlesseditor.NodeContent.node('listItem').oneOrMore();   // listItem+
ej.headlesseditor.NodeContent.node('column').exactly(3);      // column{3}
ej.headlesseditor.NodeContent.node('row').atLeast(2);         // row{2,}
```

## Alternatives

Use `NodeContent.choice(...)` to express that any one of the given alternatives is allowed. Choices can be combined with quantifiers.

```javascript
ej.headlesseditor.NodeContent.choice(
  ej.headlesseditor.NodeContent.node('paragraph'),
  ej.headlesseditor.NodeContent.node('heading')
);                                       // paragraph | heading

ej.headlesseditor.NodeContent.choice(
  ej.headlesseditor.NodeContent.node('paragraph'),
  ej.headlesseditor.NodeContent.node('heading')
).oneOrMore();                          // (paragraph | heading)+
```

When a quantifier is applied to a choice or a sequence, the group is automatically wrapped in parentheses so the quantifier scopes to the whole group.

## Sequences

Use `NodeContent.sequence(...)` to require several expressions to appear in order.

```javascript
ej.headlesseditor.NodeContent.sequence(
  ej.headlesseditor.NodeContent.node('tableRow').oneOrMore(),
  ej.headlesseditor.NodeContent.node('caption').optional()
);                                       // tableRow+ caption?
```

A sequence may itself be nested inside another sequence or inside a choice.

```javascript
ej.headlesseditor.NodeContent.sequence(
  ej.headlesseditor.NodeContent.node('tableRow').oneOrMore(),
  ej.headlesseditor.NodeContent.choice(
    ej.headlesseditor.NodeContent.node('caption'),
    ej.headlesseditor.NodeContent.node('description')
  ).optional()
);
```

## Common content expressions

A few real-world cases:

```javascript
// The document root — one or more blocks.
ej.headlesseditor.NodeContent.block().oneOrMore()                  // block+

// A paragraph — zero or more inline nodes.
ej.headlesseditor.NodeContent.inline().zeroOrMore()                // inline*

// A list item — a paragraph or heading followed by zero or more blocks.
ej.headlesseditor.NodeContent.sequence(
  ej.headlesseditor.NodeContent.choice(
    ej.headlesseditor.NodeContent.node('paragraph'),
    ej.headlesseditor.NodeContent.node('heading')
  ),
  ej.headlesseditor.NodeContent.block().zeroOrMore()
)                                                // (paragraph | heading) block*

// A table — one or more rows, optionally followed by a caption.
ej.headlesseditor.NodeContent.sequence(
  ej.headlesseditor.NodeContent.node('tableRow').oneOrMore(),
  ej.headlesseditor.NodeContent.node('caption').optional()
)                                                // tableRow+ caption?
```
