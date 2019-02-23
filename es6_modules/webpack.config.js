const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const PUBLIC_DIR = 'public'

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, PUBLIC_DIR),
        port: 8080
    },
    entry: path.resolve(__dirname, 'src', 'main.js'),
    mode: 'development',
    module: {
        //loaders
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env'
                    ]
                },
                test: /\.js$/
            }
        ]
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')
        })
    ],
    target: 'web'
}