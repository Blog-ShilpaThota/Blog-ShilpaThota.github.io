import webpack from "webpack";
import Dotenv from "dotenv";
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

Dotenv.config();

module.exports = (env) => {
  return {
    plugins: [
      new Dotenv(),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
     }),
     new NodePolyfillPlugin()
    ],resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "os":false,
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
    }
  };
};