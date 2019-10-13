/*globals module, require */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    externals: {
        'react': 'react'
    },
    mode: "production",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true
                }
            }
        ]
    },
    output: {
        libraryTarget: "commonjs",
        filename: "[name].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
