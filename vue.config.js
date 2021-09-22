const grouponPackage = require('./groupon.package.js')
const UniappToGroup = require('uniapp-to-group')

module.exports = {
  configureWebpack: {
    plugins: [
      new UniappToGroup({
        package: grouponPackage,
        app: {
          'pages': [
            'ext://poi-group-buy-plugin/detail'
          ],
          'fallbackPluginPages': {
            'product/detail/index': 'ext://poi-group-buy-plugin/detail'
          }
        }
      })
    ]
  }
}
