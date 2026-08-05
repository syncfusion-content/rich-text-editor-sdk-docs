---
layout: post
title: Syncfusion React Rich Text Editor SDK Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Agent Skills to enhance AI assistants with accurate React Rich Text Editor SDK guidance — Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Skills
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK Agent Skills for AI Assistants

**Syncfusion React Skills** is a knowledge package that gives AI assistants — VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, and other Skills CLI–compatible tools — accurate React Rich Text Editor SDK guidance. The skills include official APIs, composition patterns, theming conventions, and the required `Inject` services, so the assistant generates code that runs without manual fixes.

These skills cover every editor in the SDK: **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 16 or higher.
- A React application (existing or new); see the [Quick Start](../rich-text-editor/quick-start).
- An AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, and so on).

## Key benefits

**Component usage and API knowledge**

- Adding and configuring the Rich Text Editor, Block Editor, and Markdown Editor.
- Component-specific props, events, and required feature modules.
- Injecting services such as `Toolbar`, `Image`, `Link`, `HtmlEditor`, and `QuickToolbar` (Rich Text Editor), or `MarkdownFormatter` (Markdown Editor).

**Patterns and best practices**

- Recommended API structures and composition patterns.
- Feature-injection workflows.
- Guidance authored directly in the Skill files — no external documentation fetches required.

**Theming and styling**

- Theme usage, including light and dark variants.
- Styling and icon usage patterns.

## Installation

Install the [Syncfusion React Rich Text Editor SDK skills](https://github.com/syncfusion/react-ui-components-skills) using the Skills CLI. Browse the available skills in the [marketplace](https://www.skills.sh/syncfusion).

### Install all skills

Install every editor skill at once in the `.agents/skills` directory:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills add syncfusion/react-ui-components-skills -y

{% endhighlight %}
{% endtabs %}

### Install selected skills

Install skills interactively:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills add syncfusion/react-ui-components-skills

{% endhighlight %}
{% endtabs %}

The terminal lists the available skills. Use the arrow keys to navigate, the space bar to select, and the Enter key to confirm. The skills that match the RTE-SDK include:

```text
 Select skills to install (space to toggle)
│  ◻ syncfusion-react-richtexteditor
│  ◻ syncfusion-react-blockeditor
│  ◻ syncfusion-react-markdowneditor
|  ...
```

Next, select the AI agent and where to store the skills. In Syncfusion Code Studio, the `.agents/skills` directory is used. See the [supported agents list](https://github.com/vercel-labs/skills?tab=readme-ov-file#supported-agents) for other IDEs.

```text
│  ── Additional agents ─────────────────────────────
│  Search:
│  ↑↓ move, space select, enter confirm
│
│ ❯ ○ Augment (.augment/skills)
│   ○ Claude Code (.claude/skills)
│   ○ OpenClaw (skills)
│   ○ CodeBuddy (.codebuddy/skills)
│   ○ Command Code (.commandcode/skills)
│   ○ Continue (.continue/skills)
│   ○ Cortex Code (.cortex/skills)
│   ○ Crush (.crush/skills)
|   ...
```

Choose the installation scope (project-level or global), then confirm:

```text
◆  Installation scope
│  ● Project (Install in current directory (committed with your project))
│  ○ Global

◆  Proceed with installation?
│  ● Yes / ○ No
```

This registers the SDK skill pack so AI assistants can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

For more on the Skills CLI, see the [Skills CLI docs](https://www.skills.sh/docs).

## Install the editor packages

After the skills are installed, add the editor packages your project uses. Each tab installs one editor with the matching theme.

{% tabs %}
{% highlight bash tabtitle="Rich Text Editor" %}

npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="Block Editor" %}

npm install @syncfusion/ej2-react-blockeditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="Markdown Editor" %}

npm install @syncfusion/ej2-react-markdowneditor @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

## How the SDK Skills work

1. **Reads relevant Skill files based on queries** — retrieves component usage patterns, APIs, and best-practice guidance for the Rich Text Editor, Block Editor, and Markdown Editor. The assistant loads skill names and descriptions first, then dynamically loads the required skill and reference files as needed.
2. **Enforces Syncfusion best practices**, including:
   - Using the required feature modules for each editor.
   - Injecting applicable services (`Toolbar`, `Image`, `Link`, `HtmlEditor`, `QuickToolbar`, `MarkdownFormatter`, and so on).
   - Adding the correct theme and style imports.
3. **Generates editor-accurate code**, avoiding invalid props or unsupported patterns.

### Using the AI Assistant

Once the SDK skills are installed, the assistant can generate and update code for tasks such as:

- "Add a Rich Text Editor with Bold, Italic, Underline, and Image."
- "Build a Block Editor with default blocks and a custom slash-menu command."
- "Add a Markdown Editor with MarkdownFormatter and a custom toolbar."
- "Apply the Tailwind 3 theme and enable dark mode for any editor."

## Skills CLI commands

Manage the SDK skills after installation.

### List skills

View all installed skills in the current project or global environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills list

{% endhighlight %}
{% endtabs %}

### Remove a skill

Uninstall a specific skill from the environment:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills remove <skill-name>

{% endhighlight %}
{% endtabs %}

Replace `<skill-name>` with the name of the skill you want to remove (for example, `syncfusion-react-richtexteditor`).

### Check for updates

Check whether updates are available for installed skills:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills check

{% endhighlight %}
{% endtabs %}

### Update all skills

Update installed skills to their latest versions:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills update

{% endhighlight %}
{% endtabs %}

## FAQ

**Which agents and IDEs are supported?**

Any Skills-compatible agent or IDE that loads local skill files (Visual Studio Code, Cursor, Syncfusion Code Studio, and so on).

**Are skills loaded automatically?**

Yes. Once installed, supported agents automatically detect and load relevant skills for Syncfusion-related queries without extra configuration.

**Skills are not being loaded**

Verify that skills are installed in the correct agent directory, restart the IDE, and confirm that the agent supports external skill files.

## See also

- [AI-Powered Development](./ai-agent-tools)
- [MCP Server](./mcp-server)
- [Agent Skills Standards](https://agentskills.io/home)
- [Skills CLI](https://www.skills.sh/docs)
