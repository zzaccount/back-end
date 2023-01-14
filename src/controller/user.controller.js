const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    //获取用户传递过来的信息
    const user = ctx.request.body
    const {name,password} = user
    console.log(user);

    //将信息存储到数据库中
    const result = await userService.create(ctx, user)
    if (result) {
      ctx.body = {
        message: '创建用户成功',
        data: result
      }
    }


  }
}

module.exports = new UserController