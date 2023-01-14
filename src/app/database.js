const mysql = require('mysql2')

//创建连接池
const connectionPool = mysql.createPool({
  host:'localhost',
  port:3306,
  database:'sharksql',
  user:'root',
  password:'admin',
  connectionLimit:5
})

//获取连接是否成功
connectionPool.getConnection((err,connection)=>{
  if (err){
    console.log("获取连接失败",err);
    return
  }

  // 获取connection ,尝试和数据库建立连接
  connection.connect(err=>{
    if(err){
      console.log('数据库交互失败',err);
    }else {
      console.log("数据库连接成功");
    }
  })
})

// 获取连接池连接对象
const connection = connectionPool.promise()

module.exports = connection