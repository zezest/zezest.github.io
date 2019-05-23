const {resolve} = require('path')
const webpack = require('webpack')

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        resolve(__dirname, '../plugins'),
        resolve(__dirname, '../src'),
        resolve(__dirname, '../node_modules'),
      ],
      alias: {
        'dark-mode': '../plugins/gatsby-styled-components-dark-mode',
        'react-dom': '@hot-loader/react-dom',
      },
    },
    // See https://github.com/FormidableLabs/react-live/issues/5
    plugins: [
      new webpack.IgnorePlugin(/^(xor|props)$/),
    ],
  })
}
