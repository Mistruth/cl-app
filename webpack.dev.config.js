const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  target: "webworker",
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      'node_modules'
    ],
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
  },
}
