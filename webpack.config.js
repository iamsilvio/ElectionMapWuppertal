const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname,
    filename: './src/js/bundle.js'
  },
};
