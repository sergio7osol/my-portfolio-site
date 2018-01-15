const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production'; 

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isProduction:", isProduction);

let DIST_DIR = path.resolve(__dirname, "dist");
let SRC_DIR = path.resolve(__dirname, "src");

// *.hbs files
const extractHomeHbs = new HtmlWebpackPlugin({
    template: './home.hbs', // to get the template from - src/...
    filename: DIST_DIR + '/views/home.hbs', // the file to put the generated HTML into - dist/...
    inject: 'body',
    hash:  false
});
const extractProjectsHbs = new HtmlWebpackPlugin({
    template: './projects.hbs', // to get the template from - src/...
    filename: DIST_DIR + '/views/projects.hbs', // the file to put the generated HTML into - dist/...
    inject: 'body',
    hash:  false
});
const extractScss = new ExtractTextPlugin({
    filename: "css/[name].css"
});
const copyPartialsHbs = new CopyWebpackPlugin([
    { 
        context: SRC_DIR,
        from:  "views/partials/**/*", 
        to: DIST_DIR 
    }
]);

console.log("src: ", SRC_DIR + "/js/index.js");

const config = {
    entry: SRC_DIR + "/js/index.js",
    output: {
        path: DIST_DIR, // directory to initially output files into
        publicPath: "/",
        filename: "js/bundle.js"
    },
    context: SRC_DIR,
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }, {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: SRC_DIR
                        }  
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            } 
        ]
    },
    plugins: [
        extractScss,
        extractHomeHbs,
        extractProjectsHbs,
        copyPartialsHbs
    ]
}

module.exports = config;