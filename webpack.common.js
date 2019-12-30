module.exports = {
  entry: {
    vendor: './src/vendors/vendor.js',
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|woff(2)?|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/images/],
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        exclude: [/fonts/],
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'images/'
          }
        }
      }
    ]
  }
};
