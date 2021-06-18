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

    async login(req: Request, res: Response){
        
    }
}

export default ProfessorController