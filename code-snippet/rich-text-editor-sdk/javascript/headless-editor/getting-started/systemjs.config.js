System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/34.1.29/"
    },
    map: {
        main: "index.ts",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-headless-editor": "syncfusion:ej2-headless-editor/dist/ej2-headless-editor.umd.min.js",
        "prosemirror-history": "syncfusion:prosemirror-history/dist/prosemirror-history.min.js",
        "prosemirror-commands": "syncfusion:prosemirror-commands/dist/prosemirror-commands.min.js",
        "prosemirror-inputrules": "syncfusion:prosemirror-inputrules/dist/prosemirror-inputrules.min.js",
        "prosemirror-keymap": "syncfusion:prosemirror-keymap/dist/prosemirror-keymap.min.js",
        "prosemirror-model": "syncfusion:prosemirror-model/dist/prosemirror-model.min.js",
        "prosemirror-schema-basic": "syncfusion:prosemirror-schema-basic/dist/prosemirror-schema-basic.min.js",
        "prosemirror-schema-list": "syncfusion:prosemirror-schema-list/dist/prosemirror-schema-list.min.js",
        "prosemirror-state": "syncfusion:prosemirror-state/dist/prosemirror-state.min.js",
        "prosemirror-transform": "syncfusion:prosemirror-transform/dist/prosemirror-transform.min.js",
        "prosemirror-view": "syncfusion:prosemirror-view/dist/prosemirror-view.min.js",
        "prosemirror-tables": "syncfusion:prosemirror-tables/dist/prosemirror-tables.min.js"
    }
});

System.import('index.ts').catch(console.error.bind(console)).then(function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('container').style.visibility = "visible";
});
