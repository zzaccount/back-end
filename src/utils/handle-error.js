const app = require('../app/index')
const { NAME_OR_PASSWORD_IS_REQUIRED,PASSWORD_IS_TOO_SHORT,USERNAME_IS_ALREADY } = require('../config/error')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空'
      break
    case PASSWORD_IS_TOO_SHORT:
      code = -1001
      message = '密码过短'
      break
    case USERNAME_IS_ALREADY:
      code = -1001
      message = '用户名已被占用,请重新输入用户名'
      break
  }

  ctx.body = {
    code,
    message
  }
})