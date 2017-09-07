const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false', 'sass-loader']
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
        new ExtractTextPlugin('css/style.css'),
        new CopyWebpackPlugin([
            {
                from:'./src/js/vendor/jquery-1.12.0.min.js',
                to: './js/vendor/jquery-1.12.0.min.js'
            }
        ])

    ]
}
