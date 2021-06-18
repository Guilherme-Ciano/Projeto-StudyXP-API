import { Router } from 'express'
import TarefaController from './../database/controllers/Tarefa.controller';

const tarefaRoutes = Router()
const tarefaController = new TarefaController()

tarefaRoutes.get('/index', tarefaController.index)
tarefaRoutes.post('/create', tarefaController.create)

export default tarefaRoutes