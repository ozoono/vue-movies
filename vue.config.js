module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/styles.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
