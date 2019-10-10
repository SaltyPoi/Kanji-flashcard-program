const path = require('path');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const isProduction = env.production;
  const devServer = env.useDevServer;
  return {
    name: 'Electron main',
    mode: isProduction ? 'production' : 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'index.ts'),
    module: {
      rules: [
        {
          test: /\.tsx?/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'awesome-typescript-loader',
              options: {
                transpileOnly: true
              }
            }
          ]
        }
      ]
    },
    output: {
      path: path.join(__dirname, 'build', isProduction ? 'release' : 'debug'),
      filename: 'main.js'
    },
    resolve: {
      extensions: ['.webpack.js', '.ts', '.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.USE_DEV_SERVER': devServer,
        'pcocess.env.ISPRODUCTION': isProduction
      })
    ],
    devtool: 'cheap-module-eval-source-map'
  };
};
