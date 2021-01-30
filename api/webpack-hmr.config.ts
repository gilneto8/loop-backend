const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const HOT_ENTRY = 'webpack/hot/poll?100';

module.exports = function (options, nodeArgs) {
  options.plugins = options.plugins.filter(
    (plugin) => !(plugin instanceof ForkTsCheckerWebpackPlugin),
  );

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
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/, /\.prisma$/]),
      new StartServerPlugin({
        name: options.output.filename,
        nodeArgs,
        keyboard: true,
      }),
    ],
  };
};
