const path = require('path');
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
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: 'style-loader'
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
        new ExtractTextPlugin('style.css')
    ]
}