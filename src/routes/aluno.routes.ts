import { Router } from 'express'
import AlunoController from './../database/controllers/Aluno.controller';
import tarefaRoutes from './tarefa.routes';

const multer = require('multer');
const multerConfig = require('../config/multer');
const alunosRoutes = Router()
const alunoController = new AlunoController()

alunosRoutes.get('/index', alunoController.index)
alunosRoutes.post('/create', alunoController.create)

alunosRoutes.get('/clearall', alunoController.deleteAll)
alunosRoutes.post('/clearunique', alunoController.deleteUnique)

alunosRoutes.post('/img', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({status: "Success"})
})

alunosRoutes.use('/tarefas', tarefaRoutes)


export default alunosRoutes