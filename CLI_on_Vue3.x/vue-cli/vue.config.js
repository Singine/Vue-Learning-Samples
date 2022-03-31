const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  

  // 方式一 开启代理服务器 
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }


  // 方式二 开启代理服务器 详细配置 可开启多个 配置路径
  // devServer: {
  //   proxy: {
  //     '/api_students': {
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/api_students':''},
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     '/api_cars': {
  //       target: 'http://localhost:5001',
  //       pathRewrite:{'^/api_cars':''},
  //       ws: true,
  //       changeOrigin: true
  //     },
      
  //   }
  // }

})
