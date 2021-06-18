import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Aluno from '../model/Aluno';

interface AlunoDTO {
    nome: string;
    email: string;
    password: string;
    phone: string;
    grade: number;
    ra:string;
    level:number;
}

class AlunoController {
    async index(req: Request, res: Response) {
        const alunoRepository = getRepository(Aluno)
        const mostraTodosAlunos = await alunoRepository.find();

        return res.json(mostraTodosAlunos)
    }

    async create(req: Request, res: Response) {
        const alunoRepository = getRepository(Aluno)
        const alunoRequest: AlunoDTO = req.body;
        const alunoToCreated: Aluno = alunoRepository.create(alunoRequest);

        await alunoRepository.save(alunoToCreated);

        return res.json(alunoToCreated);
    }
}

export default AlunoController