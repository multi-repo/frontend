import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Получаем директорию текущего модуля
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, 
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, 
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
              sourceMap: true,
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
              sourceMap: true,
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
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],

  mode: 'development',
};
