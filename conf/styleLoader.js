const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  ident: 'postcss',
  options: {plugins: [Autoprefixer()]}
};

const styleLoader = isDev => {
  const loader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  return [
    {
      test: /\.css$/,
      use: [loader, 'css-loader']
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        loader,
        {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]--[hash:base64:5]',
            }
        },
        postcssLoader,
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev
          }
        }
      ]
    }
  ];
};


module.exports = styleLoader;