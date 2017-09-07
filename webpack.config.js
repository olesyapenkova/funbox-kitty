const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
           {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
             use: [
                 {
                     loader: 'file-loader',
                     options:{
                         name: 'fonts/[name].[ext]'
                     }
                 }
             ]
           }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            // { from:'./assets/video/exchange-howto-video.mp4', to: './video/exchange-howto-video.mp4' },
            { from:'./src/js/vendor/jquery-1.12.0.min.js', to: './dist/js/vendor/jquery-1.12.0.min.js' },
        ])

    ]
}