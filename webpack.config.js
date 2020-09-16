module.exports = {
  module: {
    loaders: [{
      test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
      loader: 'url-loader?limit=1024000'
    }],
    rules: [{
      test: /\.mp4$/,
      use: "file-loader?name=videos/[name].[ext]",
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, ],
  },
};
