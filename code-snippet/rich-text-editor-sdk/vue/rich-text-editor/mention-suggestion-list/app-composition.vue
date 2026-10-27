<template>
  <div>
    <ejs-richtexteditor
      id="mention_integration"
      :value="rteValue"
      placeholder="Type @ and tag the name"
    ></ejs-richtexteditor>

    <ejs-mention
      ref="mentionObj"
      id="mentionEditor"
      target="#mention_integration_rte-edit-view"
      :suggestionCount="5"
      :dataSource="data"
      :fields="fieldsData"
    ></ejs-mention>
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import {
  RichTextEditorComponent as EjsRichtexteditor,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';
import { MentionComponent as EjsMention } from '@syncfusion/ej2-vue-dropdowns';

provide('richtexteditor', [HtmlEditor, Toolbar, Image, Link, QuickToolbar]);

const mentionObj = ref(null);

const rteValue = `<p>Hello <span contenteditable="false" class="e-mention-chip">mailto:maria@gmail.com@Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>@</code> character and tag user from the suggestion list.</p>`;

const data = [
  { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
  { Name: 'Maria', EmailId: 'maria@gmail.com' },
  { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
  { Name: 'Robert', EmailId: 'robert@gmail.com' },
  { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
];

const fieldsData = { text: 'Name' };
</script>

<style>
    @import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>