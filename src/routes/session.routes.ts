import { response, Router } from 'express'
import { getRepository } from 'typeorm';
import Aluno from './../database/model/Aluno';
import Professor from './../database/model/Professor';

const sessionLog = Router()

sessionLog.post('/', async (req, res) => {
    const { email, password } = req.body;

    const alunoRepository = getRepository(Aluno);
    
    let aluno = await alunoRepository.findOne({ email });
    
    if (!aluno) {
        const professorRepository = getRepository(Professor);
        let professor = await professorRepository.findOne({ email });

        if (professor) {
            return res.json(professor);
        } else {
            return res.json({
                msg: "ERRO!"
            })
        }
    }
    
    return res.json(aluno);
})

export default sessionLog;