const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
// const BASE_URL = process.env.NODE_ENV === 'production'
//   ? '/'
//   : '/'

module.exports = {
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000
      // 只给出 js 文件的性能提示
      // assetFilter: function (assetFilename) {
      //   return assetFilename.endsWith('.js')
      // }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: [
            resolve('src'),
            resolve('node_modules/tree-table-vue/lib'),
            resolve('node_modules/v-org-tree/dist'),
            resolve('node_modules/iview/src/locale')
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  // baseUrl: BASE_URL,
  publicPath: '/',
  assetsDir: './static',
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  //     .set('_c', resolve('src/components'))
  // },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 8080
    // proxy: { // 设置代理
    //   '/aialm': {
    //     target: 'http://10.248.68.27:9094/', // 生产10.248.68.27:9094   测试10.12.1.30:28080  测试分支上传
    //     changeOrigin: true
    //   },
    //   '/oauth': {
    //     target: 'http://10.248.68.27:9094/', // 生产10.248.68.27:9094   测试10.12.1.20:9094
    //     changeOrigin: true
    //   }
    // }
  }
}
