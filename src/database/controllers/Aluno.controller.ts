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

interface alunoParaDeletar {
    id: number
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

    async deleteAll(req: Request, res: Response){
        let mensagemDeStatus = {
            'status': '',
            'message': '',
        }

        const alunoRepository = getRepository(Aluno)
        await alunoRepository.query('DELETE FROM alunos').then((result) => {
            if (result[1] === 0){
                mensagemDeStatus.status = 'Erro';
                mensagemDeStatus.message = 'Não há elementos na tabela';
            }else {
                mensagemDeStatus.status = 'Sucesso';
                mensagemDeStatus.message = 'Foram removidos ['+ result[1] + '] registros da tabela';
            }
        }) 

        return res.json(mensagemDeStatus)
    }

    async deleteUnique(req: Request, res: Response){
        let mensagemDeStatus = {
            'status': '',
            'message': '',
        }

        const alunoRepository = getRepository(Aluno)
        const alunoRequest: alunoParaDeletar = req.body
        await alunoRepository.query('DELETE FROM alunos WHERE id =' + alunoRequest.id).then((result) => {
            if (result[1] === 0){
                mensagemDeStatus.status = 'Erro';
                mensagemDeStatus.message = 'Não foi encontrado o elemento na tabela';
            }else {
                mensagemDeStatus.status = 'Sucesso';
                mensagemDeStatus.message = 'Registro apagado com sucesso';
            }
        }) 

        return res.json(mensagemDeStatus)
    }
}

export default AlunoController