const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const HOT_ENTRY = 'webpack/hot/poll?100';

module.exports = function (options, nodeArgs) {
  const _plugins = options.plugins.filter(
    (plugin) => !(plugin instanceof ForkTsCheckerWebpackPlugin),
  );

  options.plugins = _plugins;

  return {
    ...options,
    devtool: 'inline-source-map',
    entry: [HOT_ENTRY, options.entry],
    watch: true,
    externals: [
      nodeExternals({
        allowlist: [HOT_ENTRY],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
      new StartServerPlugin({
        name: options.output.filename,
        nodeArgs,
        keyboard: true,
      }),
    ],
  };
};
