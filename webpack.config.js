const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  resolve:{
    modules: ['node_modules', './src']
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:[
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[
          { loader: 'file-loader?name=[name].[ext]&outputPath=css/fonts/&publicPath=/' }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
  ]
}
