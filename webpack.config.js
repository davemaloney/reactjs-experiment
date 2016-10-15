// webpack.config.js
module.exports = {
  entry: './src/main.js',
  output: {
    path: './js',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};