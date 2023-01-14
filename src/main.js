const app = require('./app/index')
const {SERVER_PORT} = require('./config/server')

require('../src/utils/handle-error') //不需要拿东西 只需要引入 执行就行

app.listen(SERVER_PORT,()=>{
  console.log(SERVER_PORT,"端口服务器启动成功");
})