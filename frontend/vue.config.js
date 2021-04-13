module.exports = {
  devServer: {
    proxy: `http://backend:${process.env.PORT}`,
  },

  publicPath: "/",
  outputDir: "dist",
  indexPath: "index.html",

  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "vue-express-docker-nginx example",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },

  configureWebpack: {
    devtool: "source-map",
  },
};
