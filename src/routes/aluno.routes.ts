import { Router } from 'express'
import AlunoController from './../database/controllers/Aluno.controller';

const alunosRoutes = Router()
const alunoController = new AlunoController()

alunosRoutes.get('/index', alunoController.index)
alunosRoutes.post('/create', alunoController.create)

export default alunosRoutes