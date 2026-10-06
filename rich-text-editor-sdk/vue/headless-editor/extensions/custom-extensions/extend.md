---
layout: post
title: Extend an Extension in Vue Headless Editor | Syncfusion
description: Learn how to override extension configuration with the extend method, including the keyboard shortcut merge behavior.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Extend an Extension in Vue Headless Editor

Use `ExtensionDefinition.extend(overrides)` to add, replace, or remove a contributor without rebuilding the extension from scratch. The call returns a new extension with the overrides applied.

## Signature

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
extend(overrides: Partial<ExtensionConfig<TOptions>>): ExtensionDefinition<TOptions>
</script>
{% endhighlight %}
{% endtabs %}

Unlike `configure`, which only replaces option values, `extend` can override any field in `ExtensionConfig` — including the contributor functions and lifecycle hooks.

## Basic example

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const baseExtension = defineExtension({
    name: 'counter',
    commands: () => [
        { name: 'increment', execute() { /* ... */ } }
    ]
});

const loggedExtension = baseExtension.extend({
    onRegister() {
        console.log('counter registered');
    }
});
</script>
{% endhighlight %}
{% endtabs %}

`loggedExtension` inherits `name`, the `commands` contributor, and any other fields, but adds an `onRegister` hook.

## New definition per call

`extend` returns a new `ExtensionDefinition`. The original definition is unchanged.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
const baseExtension = defineExtension({ name: 'counter' });
const prioritizedExtension = baseExtension.extend({ priority: 10 });

baseExtension.config.priority;       // undefined
prioritizedExtension.config.priority; // 10
</script>
{% endhighlight %}
{% endtabs %}

## Special case: `keyboardShortcuts` merging

`keyboardShortcuts` is merged rather than replaced when both the base and the override define it. The override is applied on top of the base, so the override can add or replace individual bindings without losing the base's bindings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup lang="ts">
const baseExtension = defineExtension({
    name: 'demo',
    keyboardShortcuts() {
        return {
            'Mod-a': () => { /* select all */ return true; },
            'Mod-b': () => { /* bold */ return true; }
        };
    }
});

const customExtension = baseExtension.extend({
    keyboardShortcuts() {
        return {
            'Mod-c': () => { /* copy */ return true; }
        };
    }
});

// customExtension.keyboardShortcuts() returns:
//   { 'Mod-a': ..., 'Mod-b': ..., 'Mod-c': ... }
</script>
{% endhighlight %}
{% endtabs %}
