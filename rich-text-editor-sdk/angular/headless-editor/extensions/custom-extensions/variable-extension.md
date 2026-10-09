---
layout: post
title: Document Variable Extension Example | Headless Editor | Syncfusion
description: A runnable Document Variable custom extension for the Angular Headless Editor that turns {{name}} tokens into styled chips.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Document Variable Extension Example in Angular Headless Editor

This page demonstrates how to build a custom extension using the contributors covered above: `defineExtension`, `marks`, `commands`, `inputRules`, `domSpecs`, and `keyboardShortcuts`. The extension turns a typed token like `{{customerName}}` into a styled chip, and the same chip can be inserted from a toolbar button or from the <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> keyboard shortcut.

## What we are building

- A `variable` mark with `name` and `value` attributes that decorates inline text.
- A registered `insertVariable` command with `canExecute` payload validation that dispatches the built-in `inputRuleMark` command at the current selection.
- A `{{name}}` input rule that converts the typed token into the `variable` mark.
- A `domSpecs` block that renders the mark as a chip and parses the same shape back.
- A keyboard shortcut that cycles through the configured variables and dispatches `insertVariable`.

The following example demonstrates the Document Variable extension.
{% raw %}
```html
  <div class="variable-hint">
    Type <code>{{ '{' }}{{ '{' }}customerName{{ '}' }}{{ '}' }}</code> in the editor to convert it into a variable chip, click a button to insert one, or press <kbd>Mod</kbd>+<kbd>Alt</kbd>+<kbd>v</kbd> to cycle through the list.
  </div>

  <div id="variable-toolbar">
  @for (variable of variables; track variable.name) {
    <button type="button" (click)="insertVariable(variable)">
      Insert {{ variable.label }}
    </button>
  }
</div>

<div #editor></div>
```
{% endraw %}

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
  HeadlessEditor,
  basicExtensions,
  defineExtension
} from '@syncfusion/ej2-headless-editor';

interface VariableDef {
  name: string;
  label: string;
  value: string;
}

const VARIABLES: VariableDef[] = [
  { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
  { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
  { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

interface InsertVariablePayload {
  name: string;
}

// Resolves a variable definition by name from the option table.
function resolveVariable(
  variables: readonly VariableDef[],
  name: string
): VariableDef | undefined {
  return variables.find((v) => v.name === name);
}

let editorRef: HeadlessEditor | null = null;

// Reusable payload used by the custom command and by the keyboard
// shortcut so both paths share the same arguments.
interface InsertVariableArgs {
  name: string;
  from: number;
  to: number;
}

const variableExtension = defineExtension({
  name: 'variable',

  defineOptions: () => ({
    variables: VARIABLES
  }),

  marks() {
    return [
      {
        name: 'variable',
        attrs: [
          { name: 'name', type: 'string', default: '' },
          { name: 'value', type: 'string', default: '' }
        ]
      }
    ];
  },

  commands() {
    return [
      {
        name: 'insertVariable',
        canExecute(_ctx: any, payload: InsertVariablePayload) {
          return (
            payload !== undefined &&
            typeof payload.name === 'string' &&
            payload.name.length > 0
          );
        },
        // The custom command dispatches the built-in
        // `inputRuleMark` command through `editorRef`.
        execute(_ctx: any, payload: InsertVariableArgs) {
          const def = resolveVariable(VARIABLES, payload.name);
          if (!def) {
            return;
          }

          editorRef?.execute('inputRuleMark', {
            markType: 'variable',
            text: def.value,
            matchStart: payload.from,
            matchEnd: payload.to,
            attrs: { name: def.name, value: def.value }
          });
        }
      }
    ];
  },

  keyboardShortcuts() {
    // `this.editor` is the real `HeadlessEditor`; cycle through
    // the configured variables and dispatch the registered
    // `insertVariable` command for each press.
    const variables = this.options.variables;
    let cycleIndex = 0;

    return {
      'Mod-Alt-v': () => {
        const editor = this.editor;
        if (!editor) {
          return false;
        }

        const def = variables[cycleIndex % variables.length];
        cycleIndex += 1;

        const selection = editor.getSelection();

        return editor.execute('insertVariable', {
          name: def.name,
          from: selection.from,
          to: selection.to
        });
      }
    };
  },

  inputRules(this) {
    const _this = this;

    return [
      {
        id: 'variable:double-braces',
        pattern: /\{\{(\w+)\}\}$/,
        handler(ctx: any) {
          const name = ctx.match[1];
          const def = resolveVariable(_this.options.variables, name);

          if (!def) {
            return;
          }

          // Replace the typed token with the display value
          // and apply the `variable` mark.
          ctx.dispatchCommand('inputRuleMark', {
            markType: 'variable',
            text: def.value,
            matchStart: ctx.start,
            matchEnd: ctx.end,
            attrs: { name: def.name, value: def.value }
          });
        }
      }
    ];
  },

  domSpecs() {
    return {
      marks: {
        variable: {
          toDOM(attrs) {
            return [
              'span',
              {
                'data-type': 'variable',
                'data-name': attrs['name'],
                'class': 'variable-chip'
              },
              0
            ];
          },
          parseDOM: [
            {
              tag: 'span[data-type="variable"]',
              getAttrs(node) {
                const element = node as HTMLElement;

                return {
                  name: element.getAttribute('data-name') ?? '',
                  value: ''
                };
              }
            }
          ]
        }
      }
    };
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorElement!: ElementRef<HTMLDivElement>;

  readonly variables = VARIABLES;
  private editor!: HeadlessEditor;

  ngAfterViewInit(): void {
    this.editor = HeadlessEditor.create({
      enableTabKey: true,
      extensions: [basicExtensions, variableExtension]
    });

    editorRef = this.editor;
    this.editor.mount(this.editorElement.nativeElement);
  }

  insertVariable(variable: VariableDef): void {
    const selection = this.editor.getSelection();

    this.editor.execute('insertVariable', {
      name: variable.name,
      from: selection.from,
      to: selection.to
    });
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }

    editorRef = null;
  }
}
```
