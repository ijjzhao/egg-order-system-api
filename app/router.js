'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  // role
  // router.post('/api/role', controller.role.create)
  // router.delete('/api/role/:id', controller.role.destroy)
  // router.put('/api/role/:id', controller.role.update)
  // router.get('/api/role/:id', controller.role.show)
  // router.get('/api/role', controller.role.index)
  router.delete('/api/role', app.jwt, controller.role.removes)
  router.resources('role', '/api/role', app.jwt, controller.role)

  router.get('/api/query/shop', app.jwt, controller.query.shop)
  router.post('/api/query/functionSetting', app.jwt, controller.query.functionSetting)
  router.get('/api/query/shopGoods/:shopid', app.jwt, controller.query.shopGoods)
  router.get('/api/query/orderProperty', app.jwt, controller.query.orderProperty)
  router.get('/api/query/rolePermission', app.jwt, controller.query.rolePermission)


  // query
  router.put('/api/set/orderProperty', app.jwt, controller.set.orderProperty)
  router.put('/api/set/rolePermission', app.jwt, controller.set.rolePermission)
  router.post('/api/set/functionSetting', app.jwt, controller.set.functionSettingNew)
  router.post('/api/set/functionSettingByShop', app.jwt, controller.set.functionSettingByShop)
  router.delete('/api/set/functionSetting', app.jwt, controller.set.deleteFunctionSetting)


  // userAccess
  router.post('/api/user/access/login', controller.userAccess.login)
  router.get('/api/user/access/current', app.jwt, controller.userAccess.current)
  router.post('/api/user/access/logout', controller.userAccess.logout)
  router.put('/api/user/access/resetPsw', app.jwt, controller.userAccess.resetPsw)

  // user
  // router.post('/api/user', controller.user.create)
  // router.delete('/api/user/:id', controller.user.destroy)
  // router.put('/api/user/:id', controller.user.update)
  // router.get('/api/user/:id', controller.user.show)
  // router.get('/api/user', controller.user.index)
  router.delete('/api/user', app.jwt, controller.user.removes)
  router.resources('user', '/api/user', app.jwt, controller.user)

  // upload
  router.post('/api/upload', app.jwt, controller.upload.create)
  router.post('/api/upload/url', app.jwt, controller.upload.url)
  router.post('/api/uploads', app.jwt, controller.upload.multiple)
  router.delete('/api/upload/:id', app.jwt, controller.upload.destroy)
  // router.put('/api/upload/:id', controller.upload.update)
  router.post('/api/upload/:id', app.jwt, controller.upload.update) // Ant Design Pro
  router.put('/api/upload/:id/extra', app.jwt, controller.upload.extra)
  router.get('/api/upload/:id', app.jwt, controller.upload.show)
  router.get('/api/upload', app.jwt, controller.upload.index)
  router.delete('/api/upload', app.jwt, controller.upload.removes)
  // router.resources('upload', '/api/upload', controller.upload)
}
