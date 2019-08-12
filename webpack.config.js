const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'entry.js',
        path: path.resolve(__dirname, 'public/js')
    },
    resolve: {
        alias: {
            SCSS: path.resolve('src/scss'),
            Utilities: path.resolve('src/js/utilities/index.js')
        },
        extensions: ['.js', '.scss']
    },
    module: {
        rules: [{
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/styles.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
};