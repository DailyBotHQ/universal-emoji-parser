const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  // Webpack configuration
  let config = {
    entry: {
      main: path.resolve(__dirname, 'src/main.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name].js',
      publicPath: 'dist/',
      library: 'main',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: true,
      __dirname: true
    },
    devtool : 'source-map',
    externals: [nodeExternals()],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.webpack.js', '.web.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: [require('@babel/plugin-transform-flow-strip-types')],
            presets: [
              [ '@babel/preset-env' ]
            ]
          },
        }
      ]
    },
    plugins: [
      // Adds the source-map-support plugin for mapping the error messages back to the source file
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false
      })
    ],
  };

  if (argv && argv.mode === 'production') {
    config.plugins.push(
      new CleanWebPackPlugin.CleanWebpackPlugin()
    )
  }

  return config
}