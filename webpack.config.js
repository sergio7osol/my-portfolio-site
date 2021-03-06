const webpack = require('webpack');
const path = require('path');
// TODO: img copy to dist
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production'; 

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isProduction:", isProduction);

let DIST_DIR = path.resolve("server");
let SRC_DIR = path.resolve("src");

// *.hbs files
const extractHomeHbs = new HtmlWebpackPlugin({
    title: "Portfolio of a Frontend Developer",
    template: SRC_DIR + '/home.hbs', // to get the template from - src/...
    filename: DIST_DIR + '/views/home.hbs', // the file to put the generated HTML into - server/...
    inject: 'body',
    hash:  false
});
const extractProjectsHbs = new HtmlWebpackPlugin({
    template: SRC_DIR + '/projects.hbs', // to get the template from - src/...
    filename: DIST_DIR + '/views/projects.hbs', // the file to put the generated HTML into - server-root/...
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
        filename: "js/bundle.js",
        publicPath: "/"
    },
    context: SRC_DIR,
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                include: SRC_DIR,
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
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        } 
                    }
                ]
            } 
        ]
    },
    plugins: [
        extractHomeHbs,
        extractProjectsHbs,
        copyPartialsHbs,
        extractScss,
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery"
        })
    ]/*,
    devServer: {
        contentBase: DIST_DIR,
        publicPath: "/app/",
        // inline: true, // remove
        // hot: true, // remove
        compress: true,
        port: 3000
    }*/
}

module.exports = config;