<template>
  <div>
    <div class="theme-switcher">
      <label for="themeSelect">Choose a theme:</label>
      <select id="themeSelect" v-model="selectedTheme" @change="onThemeChange">
        <option value="default" selected>Default Theme</option>
        <option value="theme1">Theme 1 (Dark Purple)</option>
        <option value="theme2">Theme 2 (Light Gold)</option>
        <option value="theme3">Theme 3 (Dark Gray)</option>
      </select>
    </div>
    <ejs-richtexteditor
      ref="rteObj"
      :cssClass="cssClass"
      :value="rteValue"
    ></ejs-richtexteditor>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Video, Audio, PasteCleanup, ClipBoardCleanup, FormatPainter, AutoFormat } from '@syncfusion/ej2-vue-richtexteditor';

export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data() {
    return {
      selectedTheme: 'default',
      cssClass: 'custom',
      rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
    };
  },
  methods: {
    onThemeChange() {
      this.cssClass = this.selectedTheme === 'default' ? 'custom' : 'custom ' + this.selectedTheme;
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Video, Audio, PasteCleanup, ClipBoardCleanup, FormatPainter, AutoFormat]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";

body {
    touch-action: none;
    background-color: #f0f7ff;
}

.control-section {
    margin-top: 100px;
}

.e-richtexteditor {
    /* Semantic */
    --color-sf-success: #1a7f37;
    --color-sf-info: #0969da;
    --color-sf-warning: #9a6700;
    --color-sf-danger: #cf222e;

    --color-sf-success-light: #dafbe1;
    --color-sf-info-light: #ddf4ff;
    --color-sf-warning-light: #fff8c5;

    --color-sf-primary: #0969da;
    --color-sf-primary-text-color: #ffffff;
    --color-sf-primary-light: #0550ae;
    --color-sf-primary-lighter: #ddf4ff;
    --color-sf-primary-dark: #0550ae;
    --color-sf-primary-darker: #033d8b;
    --color-sf-secondary: #f6f8fa;
    --color-sf-secondary-text-color: #24292f;
    --color-sf-secondary-text-color-hover: #0969da;
    --color-sf-content-bg-color: #ffffff;
    --color-sf-content-bg-color-alt1: #f6f8fa;
    --color-sf-treeview-item-active-hover-bg: #dbeafe;
}

.theme-switcher {
    margin-bottom: 15px;
}

.theme-switcher label {
    color: #0D6EFD;
    font-weight: 600;
    margin-right: 10px;
}

.theme-switcher select {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

/* THEME 1 */
.theme1.e-rte-toolbar .e-icons {
    --color-sf-content-text-color: #f1deef;
}

.theme1.e-rte-dropdown-menu {
    --color-sf-content-text-color: #ff3d8b;
    --color-sf-content-text-color-hover: #A88600;
    --color-sf-secondary-bg-color-hover: #ceb9cb;
}

.theme1.e-dropdown-popup .e-item {
    --color-sf-content-text-color: #323437;
}

.theme1.e-dropdown-popup {
    --color-sf-flyout-bg-color: #060548;
    --color-sf-flyout-bg-color-hover: #ceb9cb;
    --color-sf-content-text-color: #f1deef;
    --color-sf-secondary-bg-color-pressed: #ffadad;
}

.theme1.theme-switcher {
    color: #f1deef;
    background-color: #060548;
}

.theme1.e-richtexteditor {
    --color-sf-primary: #ffadad;
    --color-sf-primary-text: #f1deef;
    --color-sf-primary-bg-color: #060548;
    --color-sf-primary-border-color: #060548;
    --color-sf-primary-bg-color-hover: #ceb9cb;
    --color-sf-primary-bg-color-disabled: #060548;
    --color-sf-primary-text-disabled: #f1deef80;
    --color-sf-content-bg-color: #00002e;
    --color-sf-content-bg-color-alt1: #060548;
    --color-sf-content-text-color: #ceb9cb;

    --color-sf-secondary-bg-color-pressed: #ffadad;
    --color-sf-secondary-bg-color-hover: #ceb9cb;
}


/* THEME 2 */
/* Toolbar icons */
.theme2.e-rte-toolbar .e-icons {
    --color-sf-content-text-color: #646669;
}

/* Dropdown icon */
.theme2.e-rte-dropdown-menu {
    --color-sf-content-text-color: #646669;
    --color-sf-content-text-color-hover: #A88600;
    --color-sf-secondary-bg-color-hover: #F3ECD1;
}

/* Dropdown items */
.theme2.e-dropdown-popup .e-item {
    --color-sf-content-text-color: #323437;
}

/* Dropdown popup */
.theme2.e-dropdown-popup {
    --color-sf-flyout-bg-color: #FFFFFF;
    --color-sf-flyout-bg-color-hover: #F3ECD1;
    --color-sf-content-text-color: #323437;
    --color-sf-secondary-bg-color-pressed: #E2B714;
}

/* Main RTE */
.e-richtexteditor.theme2 {

    /* Primary button (Insert Link, etc.) */
    --color-sf-primary: #CFC7B8;
    --color-sf-primary-text: #323437;
    --color-sf-primary-bg-color: #E2B714;
    --color-sf-primary-border-color: #E2B714;
    --color-sf-primary-bg-color-hover: #C89F12;
    --color-sf-primary-bg-color-disabled: #e2b7147d;
    --color-sf-primary-text-disabled: #ffffffb8;

    /* Secondary button (Cancel) */
    --color-sf-secondary-bg-color: #FFFFFF;
    --color-sf-secondary-border-color: #E6E2D8;
    --color-sf-secondary-text-color: #323437;
    --color-sf-secondary-text-color-hover: #A88600;

    /* Editor Block */
    --color-sf-content-bg-color: #FFFFFF;
    --color-sf-content-text-color: #323437;

    /* Toolbar */
    --color-sf-content-bg-color-alt1: #FCFAF5;

    /* Hover State */
    --color-sf-secondary-bg-color-hover: #F3ECD1;

    /* Active / Pressed State */
    --color-sf-secondary-bg-color-pressed: #E2B714;
    /* disabe state */
    --color-sf-content-bg-color-alt4: #A8A29E;
}


/* THEME 3 */
.theme3.e-rte-toolbar .e-icons {
    --color-sf-content-text-color: #d1d0c5;
}

/* dropdown icon */
.theme3.e-rte-dropdown-menu {
    --color-sf-content-text-color: #d1d0c5;
    --color-sf-content-text-color-hover: #d1d0c5;
    --color-sf-secondary-bg-color-hover: #d1d0c5;
}

/* dropdown text color with background */
.theme3.e-dropdown-popup .e-item {
    --color-sf-content-text-color: #646669;
}

.theme3.e-dropdown-popup {
    --color-sf-flyout-bg-color: #2c2e31;
    --color-sf-flyout-bg-color-hover: #d1d0c5;
    --color-sf-content-text-color: #d1d0c5;
    --color-sf-secondary-bg-color-pressed: #e2b714;
}

/* THeme # */
.theme3.e-richtexteditor {
    /* insertlink button */
    --color-sf-primary: #d1d0c5;
    --color-sf-primary-text: #2c2e31;
    --color-sf-primary-bg-color: #e2b714;
    --color-sf-primary-border-color: #e2b714;
    --color-sf-primary-bg-color-hover: #ceb9cb;
    --color-sf-primary-bg-color-disabled: #e2b71470;
    --color-sf-primary-text-disabled: #ffffff4f;

    /* cancel button */
    --color-sf-secondary-bg-color: #fff;
    --color-sf-secondary-border-color: #2c2e31;
    --color-sf-secondary-text-color: #000;
    --color-sf-secondary-text-color-hover: #d1d0c5;
    /* editor block */
    --color-sf-content-bg-color: #323437;
    --color-sf-content-text-color: #fff;
    /* toolbar bg and text color */
    --color-sf-content-bg-color-alt1: #2c2e31;
    --color-sf-secondary-bg-color-pressed: #e2b714;
    --color-sf-secondary-bg-color-hover: #d1d0c5;
}
</style>
