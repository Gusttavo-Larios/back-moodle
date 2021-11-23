import { Request, Response } from 'express'
import { insertCursos, select } from '../database/query.cursos'

export async function busca(request: Request, response: Response) {
  console.log(request.rawHeaders)
  const resultado = await select()
  response.status(200).json(resultado)
}

export function cadastro(request: Request, response: Response) {
  const cursoObject = request.body
  insertCursos(cursoObject)
  response.status(200).json({
    status: "Sucesso no cadastro!"
  })
}