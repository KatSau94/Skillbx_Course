const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
        })
    ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
  },
  module: {
    rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
            test: /\.less$/,
            use: [
            { loader: 'style-loader'},
            { loader: "css-modules-typescript-loader"}, 
            { 
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }
            },
            'less-loader'
        ]
        }
    ]
  }
    
};