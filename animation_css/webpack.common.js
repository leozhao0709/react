const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    // library: {
    //   type: 'umd',
    // },
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src'),
      tests: path.resolve(__dirname, 'tests'),
    },
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png', 'jpg', 'gif'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|tests)/,
        use: 'babel-loader?cacheDirectory',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['index'], // only enject index.js to template
    }),
    // // define different enject var, if use ts, then you need declare these varaible in type file, can only enject js code snippet
    // new webpack.DefinePlugin({
    //   API_BASE_URL:
    //     process.env.NODE_ENV === 'production'
    //       ? JSON.stringify('https://api.prod.com')
    //       : JSON.stringify('https://api.example.com'),
    // }),
  ],
};
