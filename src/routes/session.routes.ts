import { response, Router } from 'express'
import { getRepository } from 'typeorm';
import Aluno from './../database/model/Aluno';
import Professor from './../database/model/Professor';
import crypto from 'crypto';

const sessionLog = Router()

sessionLog.post('/', async (req, res) => {
    // Token de Segurança
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var hashCod = crypto.createHash('sha1').update(current_date + random).digest('hex');
    
    // Verificação
    const { email, password } = req.body;
    const alunoRepository = getRepository(Aluno);
    let aluno = await alunoRepository.findOne({where: { email }} && {where: { password }});
    
    if (!aluno) {
        const professorRepository = getRepository(Professor);
        let professor = await professorRepository.findOne({where: { email }} && {where: { password }});

        let responseProf = {
            data: professor,
            hash: hashCod,
            type: 'P'
        }

        if (professor) {
            return res.json(responseProf);
        } else {
            return res.json({
                msg: "ERRO!"
            })
        }
    }
    let responseAluno = {
        data: aluno,
        hash: hashCod,
        type: 'A'
    }
    return res.json(responseAluno);
})

export default sessionLog;