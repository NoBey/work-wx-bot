const webpack              = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge                = require('webpack-merge')
const CssNaNo              = require('cssnano')
const PostCssPresetEnv     = require('postcss-preset-env')
const path                 = require('path')
const base                 = require('./webpack.base.config')

const {
    srcDir,
    theme
} = require('../project.config')

const production = {
    output: {
        filename: 'js/[name].[hash:5].js'
    },
    mode   : 'production',
    devtool: false,
    module : {
        rules: [
            {
                test: /(\.less|\.css)$/,
                use :[
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options: {
                            importLoaders  : 2
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options: {
                            plugins: [
                                PostCssPresetEnv({
                                    browsers: ['> 1%', 'last 5 version', 'ie > 8']
                                }),
                                CssNaNo({
                                    reduceIdents: false,
                                    autoprefixer: false
                                })
                            ]
                        }
                    },
                    {
                        loader : 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            paths: [srcDir],
                            modifyVars: theme
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        sideEffects: false,
        splitChunks: {
            chunks     :'all',
            minSize    : 30000,
            minChunks  : 1,
            cacheGroups: {
                vendor: {
                    name    : 'vendor',
                    test    : /[\\/]node_modules[\\/]/,
                    chunks  : 'all',
                    priority: -10,
                    enforce : true
                }
            }
        }
    },
    plugins: [
        // new webpack.NoEmitOnErrorsPlugin(),
    ]
}

module.exports = merge(base, production)