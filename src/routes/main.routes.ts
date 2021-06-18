import express, { Router } from 'express'
import session from 'express-session'
import alunosRoutes from './aluno.routes';
import professoresRoutes from './professor.routes';
import sessionLog from './session.routes';
import escolaRoutes from './escola.routes';

const mainRoutes = Router()

mainRoutes.use(session({secret: 'studyxpaprenderonline2021'}))
mainRoutes.use(express.urlencoded({extended: true}))

mainRoutes.use("/alunos", alunosRoutes);
mainRoutes.use("/professores", professoresRoutes)
mainRoutes.use("/escolas", escolaRoutes)
mainRoutes.use('/login', sessionLog)



export default mainRoutes;
