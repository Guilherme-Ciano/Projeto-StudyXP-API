import { response, Router } from 'express'
import { getRepository } from 'typeorm';
import Aluno from './../database/model/Aluno';
import Professor from './../database/model/Professor';
import crypto from 'crypto';

const mobileRoute = Router()

mobileRoute.post('/', async (req, res) => {
    // Verificação
    const { email, password } = req.body;
    const alunoRepository = getRepository(Aluno);
    let aluno = await alunoRepository.query("select * from alunos where email = '" + email +"' and password= '" + password + "'" );
    
    if (!aluno) {
        const professorRepository = getRepository(Professor);
        let professor = await professorRepository.query("select * from professores where email = '" + email +"' and password= '" + password + "'" );

        if (professor) {
            return res.json(professor);
        } else {
            return res.status(404).json('Login Inválido');
        }
    }
    return res.json(aluno);
})

export default mobileRoute;