import express from 'express'
import cors from 'cors'
import './database'

import mainRoutes from './routes/main.routes';

const server = express();
server.use(express.json());
server.use(cors());

server.use(mainRoutes);

server.listen(9090, () => {
    console.log("|----------------------------------------|\n| Servidor iniciado na porta: 9090\n|----------------------------------------|\n| ROTAS:\n| [1] alunos\n| [2] professores\n| [3] login\n|----------------------------------------|");
})