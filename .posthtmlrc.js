const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const generateScopedName = isProd
  ? '[hash:base64:5]'
  : '[name]__[local]___[hash:base64:5]';
const normalizeCSSFile = isProd
  ? 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css '
  : `../${path.relative(__dirname, require.resolve('modern-normalize'))}`;

module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        year: String(new Date().getFullYear()),
        normalizeCSSFile,
      },
    },
    'posthtml-postcss-modules': {
      root: './src',
      plugins: [require('autoprefixer')],
      generateScopedName,
    },
  },
};
