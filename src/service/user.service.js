const connection = require('../app/database')

class UserSerive{
  async create(ctx,user){
    //将用户保存到数据库中
    const {name,password} = user


    const statement = 'INSERT INTO `user` (name,password) VALUES (?,?);'

    const res  = await connection.execute(statement,[name,password])
    return res
  }
  async findUserByName(name){
    const statement = 'select * from `user` where name = ?;'
    const [values] = await connection.execute(statement,[name])
    return values
  }
}

module.exports = new UserSerive()