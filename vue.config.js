module.exports = {
  devServer: {
    proxy: {
      "/tx": {
        target: "https://access.video.qq.com/tinyapp",
        pathRewrite: {
          "^/tx": ""
        }
      },
      "/vip": {
        target: "https://yun.odflv.com/odflv2/api1.php",
        pathRewrite: {
          "^/vip": ""
        }
      }
    },
    headers:{Host: 'ugcydzd.qq.com',Referer:"http://ugcydzd.qq.com"}
  },
  baseUrl: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
