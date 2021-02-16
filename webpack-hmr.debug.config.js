const webpackHMRConfig = require('./webpack-hmr.config');

module.exports = function (options) {
  return webpackHMRConfig(options, ['--inspect-brk']);
};
