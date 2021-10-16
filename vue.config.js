//webpack 扩展配置的文件
// vue.config.js   的文件放在  项目根目录中的，名字和 位置都不能更改
//引入  UglifyPlugin
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
module.exports = {
    publicPath: './',  //项目打包时使用的，表示根目录，避免一些错误
    outputDir: "mydist",//打包后代码的输出文件夹名称
    lintOnSave: process.env.NODE_ENV !== 'production', // eslint-loader 是否在保存的时候检查，生产环境下不检查语法  性能会更优
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件, 显示源文件错误在第几行，有利于调试;false 优化性能

    configureWebpack: (config) => {
        //绝对路径
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components'),
                    '@v': path.resolve(__dirname, './src/views')
                } // 别名配置
            }
        })
        if (process.env.NODE_ENV === 'production') {//process.env.NODE_ENV 获取环境信息
            // 为生产环境修改配置...
            config.mode = 'production'
            // 将每个依赖包打包成单独的js文件
            let optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                },
                minimizer: [new UglifyPlugin({
                    uglifyOptions: {
                        compress: {
                            //warnings: false,
                            drop_console: true, // console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] // 移除console
                        }
                    }
                })]
            }
            Object.assign(config, {
                optimization
            })
        }

    }


}