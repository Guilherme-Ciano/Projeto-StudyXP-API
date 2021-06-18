import { Router } from 'express'
import ProfessorController from './../database/controllers/Professor.controller';
import materiaRoutes from './materia.routes';
import tarefaRoutes from './tarefa.routes';

const professoresRoutes = Router()
const professorController = new ProfessorController()

professoresRoutes.get('/index', professorController.index)
professoresRoutes.post('/create', professorController.create)

professoresRoutes.use('/tarefas', tarefaRoutes)
professoresRoutes.use('/materias', materiaRoutes)

export default professoresRoutes