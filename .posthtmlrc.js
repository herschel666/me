const path = require('path');

const SRC = path.join(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';

const normalizeCSSFile = isProd
  ? 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css '
  : `../${path.relative(__dirname, require.resolve('modern-normalize'))}`;
const trackingId =
  'c36837aaaa3b7a2a984fb2f122bb286161a2fe47c947ab7a3b45bccff8ab3d9e_58815a7bdabfcadf4971778325a06409';

module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        year: String(new Date().getFullYear()),
        trackingId,
        normalizeCSSFile,
      },
    },
    'posthtml-inline-svg': {
      cwd: path.join(SRC, 'icons'),
      attr: 'filename',
    },
  },
};
