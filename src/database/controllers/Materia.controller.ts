import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Materia from './../model/Materia';

interface MateriaDTO {
    nome: string;
    codEscola: string;
}

class MateriaController {
    async index(req: Request, res: Response) {
        const materiaRepository = getRepository(Materia)
        const mostraTodosMaterias = await materiaRepository.find();

        return res.json(mostraTodosMaterias)
    }

    async create(req: Request, res: Response) {
        const materiaRepository = getRepository(Materia)
        const materiaRequest: MateriaDTO = req.body;
        const materiaToCreated: Materia = materiaRepository.create(materiaRequest);

        await materiaRepository.save(materiaToCreated);

        return res.json(materiaToCreated);
    }
}

export default MateriaController