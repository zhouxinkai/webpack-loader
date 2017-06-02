var path = require('path');
module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'output.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'router-loader',
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', 'web_loaders'],
  }
}
