import { Request, Response, Router } from 'express'
import * as HomeControllers from '../controllers/home.controller'

const router = Router()

router.get('/', HomeControllers.busca)
router.post('/cadastrar', HomeControllers.cadastro)

export default router