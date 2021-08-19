import { Router } from 'express'
import TarefaController from './../database/controllers/Tarefa.controller';

const tarefaRoutes = Router()
const tarefaController = new TarefaController()

tarefaRoutes.get('/index', tarefaController.index)
tarefaRoutes.post('/create', tarefaController.create)
tarefaRoutes.get('/clearall', tarefaController.deleteAll)
tarefaRoutes.post('/clearunique', tarefaController.deleteUnique)
tarefaRoutes.post('/concluirtarefa', tarefaController.concluirTarefa)
tarefaRoutes.get('/tarefaspendentes', tarefaController.TarefasPendentes)

export default tarefaRoutes