const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    name: 'project',
    resolve: {
      alias: {
        '@': resolve('src'),
        'views': resolve('src/views'),
        'components': resolve('src/components')
      }
    }
  }
}