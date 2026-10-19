<template>
    <div>
        <ejs-richtexteditor id="mention_integration" :value="rteValue" placeholder="Type @ and tag the name"></ejs-richtexteditor>
        <ejs-mention ref="mentionObj" id="mentionEditor" target="#mention_integration_rte-edit-view" :suggestionCount="5" :dataSource="data" :fields="fieldsData"></ejs-mention>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent,
        "ejs-mention":MentionComponent
    },
    data: function() {
        return {
            rteValue: `<p>Hello <span contenteditable=\"false\" class=\"e-mention-chip\"><a href=\"mailto:maria@gmail.com\" title=\"maria@gmail.com\">&#64;Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list.</p>`,
            data: [
                { Name: "Selma Rose",  EmailId: "selma@gmail.com" },
                { Name: "Maria",   EmailId: "maria@gmail.com" },
                { Name: "Russo Kay",  EmailId: "russo@gmail.com" },
                { Name: "Camden Kate",  EmailId: "camden@gmail.com" },
                { Name: "Robert",  EmailId: "robert@gmail.com" },
                { Name: "Garth", EmailId: "garth@gmail.com" },
            ],
            fieldsData: { text: 'Name' }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    },
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-material-theme/styles/rich-text-editor/index.css";

@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

</style>