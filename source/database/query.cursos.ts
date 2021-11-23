import { connect } from './connect'

export type Curso = {
  nome: string,
  professor: string,
  descricao: string,
  logo: string
}

export async function select() {
  const database = connect()
  try {
    const [rows, fields] = await database.promise().execute('SELECT * FROM cursos;')
    database.end()
    return rows
  } catch (error) {
    console.log(error)
  }
}

export function insertCursos(cursoObject: Curso) {
  const database = connect()
  database.query('INSERT INTO cursos SET ?',
    cursoObject, (error, response) => {
      if (error) throw error
      database.end()
    })
}