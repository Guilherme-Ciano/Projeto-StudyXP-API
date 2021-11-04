import { Router } from 'express'
import FotosController from '../database/controllers/Fotos.controller';
import Foto from '../database/model/Foto';
import AlunoController from './../database/controllers/Aluno.controller';
import tarefaRoutes from './tarefa.routes';

const multer = require('multer');
const multerConfig = require('../config/multer');
const alunosRoutes = Router()
const alunoController = new AlunoController()
const fotoController = new FotosController()

alunosRoutes.get('/index', alunoController.index)
alunosRoutes.post('/create', alunoController.create)
alunosRoutes.post('/update', alunoController.update)
alunosRoutes.get('/clearall', alunoController.deleteAll)
alunosRoutes.post('/clearunique', alunoController.deleteUnique)

alunosRoutes.post('/img', multer(multerConfig).single('file'), (req, res) => {  
    const filepath = req.file?.path;

    return res.json({status: "Success"})
})

alunosRoutes.use('/tarefas', tarefaRoutes)


export default alunosRoutes