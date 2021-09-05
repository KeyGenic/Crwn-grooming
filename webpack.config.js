const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './source/main.js',
   resolve: {
    extensions: ['.js', '.jsx','.scss','.css',]
},
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8001,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ["@babel/preset-env", '@babel/preset-react']
            }
         },
       
          {
            test: /\.scss$/,
            use: [
                "style-loader", // 3. Inject styles into DOM
                "css-loader", // 2. Turns css into commonjs
                "sass-loader", // 1. Turns sass into css
            ],
        },   {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
       },
       {
         test: /\.(png|jpg|gif)$/i,
         use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ]
       },
       {
         test: /\.svg$/,
         use: [
           {
             loader: 'svg-url-loader',
             options: {
               limit: 10000,
             },
           },
         ]
       }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './source/index.html'
      })
   ]
}