---
layout: post
title: Syncfusion React Rich Text Editor Agent Skills for AI Assistants | Syncfusion
description: Learn how to install and use Syncfusion Agent Skills to enhance AI assistants with accurate React Rich Text Editor guidance — APIs, composition patterns, and Inject services.
platform: rich-text-editor-sdk
control: Skills
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Syncfusion® React Rich Text Editor Agent Skills for AI Assistants

**Syncfusion React Skills** is a knowledge package that gives AI assistants — VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, and other Skills CLI–compatible tools — accurate React Rich Text Editor guidance. The skills include official APIs, composition patterns, theming conventions, and the required `Inject` services, so the assistant generates code that runs without manual fixes.

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 16 or higher.
- A React application (existing or new); see the [Quick Start](../components/rich-text-editor/quick-start).
- An AI agent or IDE that integrates with the Skills CLI (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, and so on).

## Key benefits

**Component usage and API knowledge**

- Adding and configuring the React Rich Text Editor.
- Component-specific props, events, and required feature modules.
- Injecting services such as `Toolbar`, `Image`, `Link`, `HtmlEditor`, and `QuickToolbar`.

**Patterns and best practices**

- Recommended API structures and composition patterns.
- Feature-injection workflows.
- Guidance authored directly in the Skill files — no external documentation fetches required.

**Theming and styling**

- Theme usage, including light and dark variants.
- Styling and icon usage patterns.

## Installation

Install the [Syncfusion React Rich Text Editor skills](https://github.com/syncfusion/react-ui-components-skills) using the Skills CLI. Browse the available skills in the [marketplace](https://www.skills.sh/syncfusion).

### Install React Rich Text Editor skills

Install skills interactively:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx skills add syncfusion/react-ui-components-skills

{% endhighlight %}
{% endtabs %}

The terminal lists the available skills. Use the arrow keys to navigate, the space bar to select, and the Enter key to confirm. The skill for the React Rich Text Editor is:

```text
 Select skills to install (space to toggle)
│  ◻ syncfusion-react-richtexteditor
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

This registers the skill pack so AI assistants can automatically load it in supported IDEs such as [Code Studio](https://help.syncfusion.com/code-studio/reference/configure-properties/skills), [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [Cursor](https://cursor.com/docs/skills).

For more on the Skills CLI, see the [Skills CLI docs](https://www.skills.sh/docs).

## How the React Rich Text Editor Skills work

1. **Reads relevant Skill files based on queries** — retrieves component usage patterns, APIs, and best-practice guidance for the React Rich Text Editor. The assistant loads skill names and descriptions first, then dynamically loads the required skill and reference files as needed.
2. **Enforces Syncfusion best practices**, including:
   - Using the required feature modules for the editor.
   - Injecting applicable services (`Toolbar`, `Image`, `Link`, `HtmlEditor`, `QuickToolbar`, and so on).
   - Adding the correct theme and style imports.
3. **Generates editor-accurate code**, avoiding invalid props or unsupported patterns.

### Using the AI Assistant

Once the skills are installed, the assistant can generate and update code for tasks such as:

- "Add a Rich Text Editor with Bold, Italic, Underline, and Image."
- "Configure the toolbar to show only the formatting tools I need."
- "Add image upload to a custom endpoint."
- "Apply the Tailwind 3 theme and enable dark mode."

## Skills CLI commands

Manage the skills after installation.

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
