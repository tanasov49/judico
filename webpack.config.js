const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
module.exports = {
  entry: { main: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '',
  },
    mode: 'development',
    devServer: {
    static: path.resolve(__dirname, './public'),
    compress: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/, // this line as well
        use: {
          loader: 'ts-loader',
          options: {
          compilerOptions: {
          noEmit: false, // this option will solve the issue
         },
        },
       },
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        } 
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
        generator: {
          filename: 'assets/svg/[hash][ext][query]'
        } 
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        } 
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/scss/mixins.scss',
                './src/scss/variables.scss',
              ]
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@images': path.resolve(__dirname, './src/images'),
      "@data": path.resolve(__dirname, "./src/data/data.ts"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/interfaces.ts"),
      "@context": path.resolve(__dirname, "./src/context/context.tsx")
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};