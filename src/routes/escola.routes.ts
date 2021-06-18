import { Router } from 'express'
import EscolaController from './../database/controllers/Escola.controller';
import materiaRoutes from './materia.routes';

const escolaRoutes = Router()
const escolaController = new EscolaController()

escolaRoutes.get('/index', escolaController.index)
escolaRoutes.post('/create', escolaController.create)

escolaRoutes.use('/materias', materiaRoutes)

export default escolaRoutes