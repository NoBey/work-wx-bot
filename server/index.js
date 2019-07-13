const express              = require('express')
const webpack              = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compress             = require('compression')
const proxy                = require('http-proxy-middleware')
const webpackConfig        = require('../config/webpack.dev.config')
const project              = require('../project.config')
const proxy_table          = require('./proxy.table')
const app                  = express()
const port                 = 8080
const compiler             = webpack(webpackConfig)
const chalk                = require('chalk')

app.use(compress())

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
})

devMiddleware.waitUntilValid(() => {
    console.log(chalk.green('完成 http://localhost:' + port + ' \n'))
})

for (let x in proxy_table) {
    app.use(proxy(x, proxy_table[x]))
}

app.use(devMiddleware)
app.use(express.static(project.basePath))

module.exports = {
    app,
    port
}
