import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const isProd = process.env.PROD_ENV === 'production';

export default {
  devtool: isProd ? 'source-map' : 'eval-source-map',
  
  entry: './src/index.jsx',
  output: {
    filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          isProd ? 'style-loader' : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd, 
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProd, 
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd, 
            },
          },
        ],
      },

      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: !isProd, 
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true, 
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],

  mode: isProd ? 'production' : 'development',
};
