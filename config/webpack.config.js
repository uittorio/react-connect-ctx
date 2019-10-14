/*globals module, require */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './index.ts'
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
                    onlyCompileBundledFiles: true,
                    configFile: './tsconfig.test.json'
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
        new CopyPlugin([
            { from: 'package.json' },
            { from: 'README.md' },
            { from: 'index.d.ts' }
        ]),
    ]
};
