import { Router } from 'express'
import MateriaController from './../database/controllers/Materia.controller';

const materiaRoutes = Router()
const materiaController = new MateriaController()

materiaRoutes.get('/index', materiaController.index)
materiaRoutes.post('/create', materiaController.create)

export default materiaRoutes