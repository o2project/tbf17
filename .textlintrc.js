const config = require('@kubosho/configs/textlint');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-dead-link': {
      ignoreRedirects: true,
      retry: 0,
    },
    'preset-jtf-style': {
      '4.2.9.ダッシュ(-)': false,
    },
  },
};
