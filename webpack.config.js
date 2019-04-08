let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./assets/js/script.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js',
        // publicPath:'./dist/'
    },

    module:{
        rules:[
            {
                
                
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader:'css-loader',
                        options:{
                            url:false}
                    },
              {
                  loader:'postcss-loader'
              }]
            }),
        },
    


            
        
        {
            test:/\.(jpe?g|png|gif|svg)$/,
            use:[
                {
                loader:'url-loader',
                options:{
                    limit:400000,
                    outputPath:'./images'
                }
                },
                'image-webpack-loader'
        
    ]
},

{
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use:{
        loader:'file-loader',
        options: {
            outputPath: 'css/fonts',
            name: '[name].[ext]',
        },
    }
}
]
},
plugins: [
  new ExtractTextPlugin('assets/css/style.css'),
  new HtmlWebpackPlugin({
      template: 'assets/index.html'
  })
]
}