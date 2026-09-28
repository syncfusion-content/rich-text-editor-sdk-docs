System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        "jsx": "react"
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/34.1.29/"
    },
    map: {
        app: 'app',
        ts: "https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",

        "@syncfusion/ej2-headless-editor": "syncfusion:ej2-headless-editor/dist/ej2-headless-editor.umd.min.js",
        "react-dom":"https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js",
"react":"https://unpkg.com/react@16.3.1/umd/react.development.js",
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }

});

System.import('app');