const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
};
