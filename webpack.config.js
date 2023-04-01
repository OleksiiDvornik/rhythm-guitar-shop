const webpackConfig = (mode) => ({
  mode: mode,
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: mode === 'development' ? 'source-map' : false,
})

export default webpackConfig;
