const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  resolve: {
    fallback: {
      dns: require.resolve('dns'),
      fs: require.resolve('fs'),
      net: require.resolve('net'),
      tls: require.resolve('tls'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      zlib: require.resolve('browserify-zlib'),
      util: require.resolve('util'),
      timers: require.resolve('timers-browserify'),
      assert: require.resolve('assert'),
      constants: require.resolve('constants-browserify'),
      process: require.resolve('process/browser'),
      buffer: require.resolve('buffer/'),
      url: require.resolve('url/'),
    },
  },
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ['console'],
    }),
  ],
}
