// import mysql from 'mysql'
import mysql from 'mysql2'

export function connect() {
  const connect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })

  // connect.connect((error) => {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log('Sucesso!')
  //   }
  // })

  return connect
}