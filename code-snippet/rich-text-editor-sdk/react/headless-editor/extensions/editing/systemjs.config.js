System.config({
    transpiler: "ts",

    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        jsx: "react"
    },

    meta: {
        "typescript": {
            exports: "ts"
        }
    },

    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/35.1.37/"
    },

    map: {
        app: "app",
        ts: "https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",

        "@syncfusion/ej2-base":
            "syncfusion:ej2-base/dist/ej2-base.umd.min.js",

        "@syncfusion/ej2-headless-editor":
            "syncfusion:ej2-headless-editor/dist/ej2-react-headless-editor.umd.min.js",

        "react":
            "https://unpkg.com/react@16.3.1/umd/react.development.js",

        "react-dom":
            "https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js"
    },

    packages: {
        "app": {
            main: "index",
            defaultExtension: "tsx"
        }
    }
});

System.import("app")
    .then(function () {
        var loader = document.getElementById("loader");
        var container = document.getElementById("container");

        if (loader) {
            loader.style.display = "none";
        }

        if (container) {
            container.style.visibility = "visible";
        }
    })
    .catch(function (error) {
        console.error("Failed to load React Headless Editor preview:", error);
    });