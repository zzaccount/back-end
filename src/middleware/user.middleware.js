const { NAME_OR_PASSWORD_IS_REQUIRED, PASSWORD_IS_TOO_SHORT, USERNAME_IS_ALREADY } = require("../config/error");
const userService = require("../service/user.service");
const { md5Password } = require("../utils/md5-password");

const verifyUser = async (ctx, next) => {
  //获取用户传递过来的信息
  const user = ctx.request.body
  const { name, password } = user
  console.log(user);

  //用户密码可行性 判断
  if (!name || !password) {
    return ctx.app.emit('error',NAME_OR_PASSWORD_IS_REQUIRED,ctx)
  } else {
    if (password.length <= 5) {
      return ctx.app.emit('error',PASSWORD_IS_TOO_SHORT,ctx)
    }
  }

  const IsRepect = await userService.findUserByName(name)
  console.log(IsRepect);
  if (IsRepect.length) {
    return ctx.app.emit('error',USERNAME_IS_ALREADY,ctx)
  }

  //执行下一个中间件
  await next()
}

//对密码进行加密
const handlePassword = async(ctx,next) =>{
  //1.取出密码
  const {password} = ctx.request.body
  ctx.request.body.password = md5Password(password)

  await next()
}
module.exports = {
  verifyUser,
  handlePassword
}