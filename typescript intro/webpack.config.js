import path from "path"
export default{
    entry: {
        vendor: "./index.ts",
    },
    mode: "development",
    module: {
        rules: []
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve("dist")
    },
}