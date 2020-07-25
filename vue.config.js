module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      config.module
        .rule('istanbul')
        .test(/\.(js|ts)$/)
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({
          esModules: true,
        })
    }
  },
}
