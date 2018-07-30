module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513779989145_1674'

  // add your config here
  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ]

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:9527' ],
  }

  config.multipart = {
    fileExtensions: [ '.apk', '.pptx', '.docx', '.csv', '.doc', '.ppt', '.pdf', '.pages', '.wav', '.mov' ], // 增加对 .apk 扩展名的支持
  },

  config.bcrypt = {
    saltRounds: 10 // default 10
  }

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  }



  config.sequelize = {
  dialect: 'mssql', // support: mysql, mariadb, postgres, mssql
  database: 'order_review',
  host: 'localhost',
  port: 3483,
  username: 'sa',
  password: 'sa',
};

  return config
}
