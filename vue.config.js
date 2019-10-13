const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/styles.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
