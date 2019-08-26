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
            Components: path.resolve('src/js/components'),
            SCSS: path.resolve('src/scss'),
            Utilities: path.resolve('src/js/utilities/index.js')
        },
        extensions: ['.js', '.scss']
    },
    module: {
        rules: [{
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../img'
                    }
                }]
            },
            {
                test: /\.(woff)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../css'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/styles.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ]
};
