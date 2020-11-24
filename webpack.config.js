module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader?minimize=false'
        }
      },
    ]
  },
  devServer: {
    contentBase: "./src",  
    historyApiFallback: true,      
    port: 3333,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}