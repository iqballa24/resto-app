const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name]-[hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/style-[contenthash].css',
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
    }),
    new WebpackPwaManifest({
      name: 'NgemilKuy App',
      short_name: 'NgemilKuy',
      description: 'Free Catalogue Restaurant for you',
      start_url: './index.html',
      background_color: '#FFFFFF',
      theme_color: '#D9543D',
      orientation: 'any',
      filename: 'site.webmanifest',
      publicPath: './',
      display: 'standalone',
      ios: true,
      icons: [
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          destination: 'images/icons',
          sizes: [96, 128, 192, 256, 384, 512],
          ios: true,
        },
        {
          src: path.resolve('src/public/images/icons/maskable_icon.png'),
          size: '1024x1024',
          destination: 'images/icons',
          purpose: 'maskable',
        },
      ],
    }),
  ],
});
