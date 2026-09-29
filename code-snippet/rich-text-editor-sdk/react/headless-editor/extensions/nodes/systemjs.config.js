System.config({
    transpiler: "ts",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            jsx: "react"
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/34.1.29/"
    },
    map: {
        main: "index.tsx",
        react: "https://unpkg.com/react@18/umd/react.production.min.js",
        "react-dom": "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-headless-editor": "syncfusion:ej2-headless-editor/dist/ej2-react-headless-editor.umd.min.js"
    }
});
System.import('index.tsx').catch(console.error.bind(console)).then(function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('container').style.visibility = "visible";
});