module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        year: String(new Date().getFullYear()),
      },
    },
  },
};
