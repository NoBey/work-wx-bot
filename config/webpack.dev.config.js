const webpack = require('webpack')
const merge   = require('webpack-merge')
const base    = require('./webpack.base.config')

const development = {
    mode   : 'development',
    devtool: 'cheap-module-eval-source-map',
    module : {
        rules: []
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(base, development)
