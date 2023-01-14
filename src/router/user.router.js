const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
// 创建路由对象
const {verifyUser, handlePassword} = require('../middleware/user.middleware')

const userRouter = new KoaRouter({prefix:'/users'})
//定义路由映射
  //1.用户注册
  console.log(verifyUser);
userRouter.post('/',verifyUser,handlePassword,UserController.create)

module.exports = userRouter