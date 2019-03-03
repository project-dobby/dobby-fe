require("@babel/register")({
    presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
    ],
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    plugins: [
        [
            "module-resolver", {
                root: ["./src"],
                alias: {
                    src: "./src",
                },
            },
        ],
    ],
});
require("./src/index.server.tsx");
