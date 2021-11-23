import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routesMain from './routes'

dotenv.config()

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())


server.use('/', routesMain)

server.listen(process.env.PORTA, () => {
  console.log('Server rodando na porta ' + process.env.PORTA)
})