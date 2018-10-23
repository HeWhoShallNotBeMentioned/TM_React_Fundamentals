const path = require('path');
//npm package that resaves the home index.html file in the dist folder and reformats for React\Webpac\Babel
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    //Puts the output file at the root in a directory called dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // 1st line finds all files in the app with .js extention and runs them through Babel via babel-loader package
      { test: /\.(js)$/, use: 'babel-loader' },
      //2nd line finds all files in the app with .css extention, processes and loads them
      // css-loader translates css props like background-image URL and style-loader loads the styles into app
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
};
