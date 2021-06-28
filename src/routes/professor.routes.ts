import { Router } from 'express'
import ProfessorController from './../database/controllers/Professor.controller';
import materiaRoutes from './materia.routes';
import tarefaRoutes from './tarefa.routes';

const multer = require('multer');
const multerConfig = require('../config/multer');
const professoresRoutes = Router()
const professorController = new ProfessorController()

professoresRoutes.get('/index', professorController.index)
professoresRoutes.post('/create', professorController.create)

professoresRoutes.post('/img', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({status: "Success"})
})

professoresRoutes.use('/tarefas', tarefaRoutes)
professoresRoutes.use('/materias', materiaRoutes)

export default professoresRoutes