<template>
<div id="app">
    <div id='container'>
        <br>
        <form id="myForm" >
          <ejs-richtexteditor name="name" id="name" v-model="name" :blur="blur"></ejs-richtexteditor>
          <span style='color: red' v-for="error in errors">{{ error }}</span>
          <p>
    <button id="validateSubmit" class="sample-btn e-control e-btn" type="submit" data-ripple="true">Submit</button>
          <button id="reset-btn" class="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
  </p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { provide } from 'vue';

import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { FormValidator } from '@syncfusion/ej2-inputs';
let errors = [];
let name = null;
const blur = function(){
  if(name) return true;
  errors = [];
  if(!name) errors.push("value required.");
}
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor]);
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-material-theme/styles/rich-text-editor/index.css";

</style>