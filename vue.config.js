module.exports = {
    devServer: {
      host: '0.0.0.0',
      proxy: 'http://localhost:4000/',
      disableHostCheck: true
    }
  }