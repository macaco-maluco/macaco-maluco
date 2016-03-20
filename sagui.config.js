/**
 * Sagui configuration object
 */
module.exports = {
  /**
   * Different application entry-points
   * Each page is a combination of a JavaScript file and a HTML file
   *
   * Example: 'index' -> 'index.html' and 'index.js'
   */
  pages: ['index'],


  /**
   * Webpack configuration object
   * see: http://webpack.github.io/docs/configuration.html
   *
   * Will ovewrite and extend the default Sagui configuration
   */
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.mp4$/,
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }
      ]
    }
  }
}
