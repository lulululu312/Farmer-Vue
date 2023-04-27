const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.129.29.16:18080/',
        pathRewrite:{'^/api':''},//路径改写
        changeOrigin: true
      },
    }
  }
})

