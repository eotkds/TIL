const path = require('path');

module.exports = {
    // entry file
    entry: [
        '@babel/polyfill',
        './src/js/main.js',
    ],

    //번들링 된 js 파일의 이름(filename)과 저장될 경로(path)를 지정
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/js')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], //babel-loader가 es6문법을 es5문법으로 변환해줌
                }
            }
        }]
    },
    devtool: 'source-map',
    mode: 'development'
}