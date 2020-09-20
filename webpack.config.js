const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    //publicPath: 'http://localhost/sdm_6.50/aar.html',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    //new HtmlWebPackPlugin()
    // new HtmlWebPackPlugin({
    //   alwaysWriteToDisk: true,
    //   template: "./src/index.html",
    //   filename: "../../../aar.html"
    //   //template: "./src/SDMR.aspx",
    //   //filename: "../../../SDMR.aspx"

    // })
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   //filename: "../../aar.html"
    //   filename: "./mjg.html"
    // })
  ],
  devServer: {
    index: 'SDMR.aspx',
    writeToDisk: true,
    //serveIndex: true,
   // contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'assets')]
    publicPath: '/sdm_6.50/client/react-custom/dist/',
    //historyApiFallBack: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    //host: 'localhost'
    // proxy: [{
    //   context: ['/auth', '/api'],
    //   target: 'http://localhost:80',
    // }],
      // '/api2/bypass-example': {
        proxy: {
          'Actions.ashx': {
            target: 'http://localhost/sdm_6.50/Actions.ashx',
            bypass: function(req, res, proxyOptions) {
              //if (req.headers.accept.indexOf('html') !== -1) {
                //console.log(req.headers)
                console.log('Skipping proxy for browser request.');
                // res.send({a:'a'
                // })
               //return 'http://localhost/sdm_6.50/Actions.ashx';
              //}
            }
          }
        }
        // bypass: (req, res) => res.send({

        //   if (req.headers.accept.indexOf('html') !== -1) {
        //     console.log('Skipping proxy for browser request.');
        //     return '/index.html';
        //   }
        //  // mssg: 'proxy server - Message came from bypass property in webpack'
        // }),
      //},
      //'/api': 'http://localhost:80'



    //   '/api': {
    //       target: 'http://localhost:80', ///sdm_6.50/aar.html',
    //       pathRewrite: {'^/api' : ''},
    //       secure: false,
    //       changeOrigin: true
    //   }
    // }
  },
  module: {
    rules: [
      {  
        test: /\.svg$/,  
        loader: 'svg-sprite-loader'  
      },
      {
        test: /\.(ttf|eot|woff|woff2|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }
};