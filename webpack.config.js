const path = require('path')


module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: "webworker",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      'node_modules'
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
}
