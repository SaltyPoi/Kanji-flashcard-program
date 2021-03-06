const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const outputPath = path.join(
    __dirname,
    'build',
    isProduction ? 'release' : 'debug'
  );
  const publicPath = 'http://localhost:8080/build/debug/';
  const devServer = env.useDevServer;

  const configObject = {
    name: 'Electron renderer',
    mode: isProduction ? 'production' : 'development',
    target: 'electron-renderer',
    entry: [
      path.join(__dirname, 'src/index.tsx'),
      path.join(__dirname, 'src/scss/index.scss')
    ],
    module: {
      rules: [
        {
          test: /\.tsx?/,
          exclude: /node_modules/,
          use: [
            'react-hot-loader/webpack',
            {
              loader: 'awesome-typescript-loader',
              options: {
                transpileOnly: true
              }
            }
          ]
        },
        {
          test: /\.(scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    output: {
      path: outputPath,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html'
      })
    ],
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss'],
      modules: ['node_modules']
    },
    devtool: 'cheap-module-eval-source-map'
  };

  if (!isProduction || devServer) {
    configObject.devServer = {
      hot: true, // enable HMR on the server
      contentBase: outputPath, // match the output path
      publicPath // match the output `publicPath`
    };
    configObject.output.publicPath = publicPath;
  }

  return configObject;
};
