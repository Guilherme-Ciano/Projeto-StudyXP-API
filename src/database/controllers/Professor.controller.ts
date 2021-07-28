import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Professor from '../model/Professor'

interface ProfessorDTO {
    nome: string;
    email: string;
    password: string;
    phone: string;
    codEscola: string;
}


interface profParaDeletar {
    id: number
}

class ProfessorController {
    async index(req: Request, res: Response) {
        const professorRepository = getRepository(Professor)
        const mostraTodosProfessores = await professorRepository.find();

        return res.json(mostraTodosProfessores)
    }

    async create(req: Request, res: Response) {
        const professorRepository = getRepository(Professor)
        const professorRequest: ProfessorDTO = req.body;
        const professorToCreated: Professor = professorRepository.create(professorRequest);

        await professorRepository.save(professorToCreated);

        return res.json(professorToCreated);
    }

    async deleteAll(req: Request, res: Response){
        let mensagemDeStatus = {
            'status': '',
            'message': '',
        }

        const professorRepository = getRepository(Professor)
        await professorRepository.query('DELETE FROM professores').then((result) => {
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

        const professorRepository = getRepository(Professor)
        const professorRequest: profParaDeletar = req.body
        await professorRepository.query('DELETE FROM professores WHERE id =' + professorRequest.id).then((result) => {
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

export default ProfessorController