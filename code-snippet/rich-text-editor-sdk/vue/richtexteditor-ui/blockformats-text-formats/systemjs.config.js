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
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        vue: "https://unpkg.com/vue@2.6.14/dist/vue.min.js",
        "@syncfusion/ej2-vue-base": "syncfusion:ej2-vue-base/dist/ej2-vue-base.umd.min.js",
        "@syncfusion/ej2-vue-richtexteditor-ui": "syncfusion:ej2-vue-richtexteditor-ui/dist/ej2-vue-richtexteditor-ui.umd.min.js"
    }
});

System.import('index.js');