const webpack = require('webpack')
const chalk   = require('chalk')
const config  = require('../config/webpack.dll.config')

webpack(config).run((err, stats) => {
    if (err || stats.hasErrors()) {
        console.log(chalk.red('  Webpack 编译失败！\n'))
    } else {
        console.log(chalk.green('  Webpack 编译成功！ ./dll. \n'))
    }
})
