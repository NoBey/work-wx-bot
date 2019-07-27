const router = require('koa-router')(); // 路由中间件
import Action from '../action/bot'

/*
  ** 路由列表
  ** @POST  /user             {Object}       创建用户
  ** @put   /user             {Object}       更新用户信息
  ** @get   /user/:user       {params.user}  获取指定用户信息
  **
*/


router.get('/bot', Action.list)
router.get('/bot/:_id', Action.get)
router.post('/bot', Action.create)
router.post('/bot/:_id', Action.update)


export default router
