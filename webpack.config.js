const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.ts',
  target: 'web',
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
};
