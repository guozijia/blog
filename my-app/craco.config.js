
const CracoLessPlugin = require('craco-less');
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1dc989' },
                        javascriptEnabled: true
                    },
                },
            },
        },
    ],
    webpack: { //路径配置
        alias: {
            "@": resolve("src")
        }
    }
}