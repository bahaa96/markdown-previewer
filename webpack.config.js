let path = require("path")
let webpack = require("webpack")


module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!tether/dist/js/tether.min.js",
        "script-loader!bootstrap/dist/js/bootstrap.min.js",
        "./app/app.jsx"
    ],
    externals:{
        jquery: "jQuery",
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': "jquery",
            "JQuery": "jquery",
            "window.jQuery": "jquery",
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, "styles/app.scss")
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,

            },

        ]
    },

    devtool : process.env.NODE_ENV === "development" ? "cheap-module-eval-source-map" : undefined
}