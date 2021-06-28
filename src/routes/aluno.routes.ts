import { Router } from 'express'
import AlunoController from './../database/controllers/Aluno.controller';

const multer = require('multer');
const multerConfig = require('../config/multer');
const alunosRoutes = Router()
const alunoController = new AlunoController()

alunosRoutes.get('/index', alunoController.index)

alunosRoutes.post('/create', alunoController.create)

alunosRoutes.post('/img', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({status: "Success"})
})


export default alunosRoutes