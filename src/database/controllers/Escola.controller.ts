import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Escola from './../model/Escola';

interface EscolaDTO {
    nome: string;
    nome_adm: string;
    phone: string;
    email: string;
    password: string;
    codEscola: string;
}

class EscolaController {
    async index(req: Request, res: Response) {
        const escolaRepository = getRepository(Escola)
        const mostraTodosEscolas = await escolaRepository.find();

        return res.json(mostraTodosEscolas)
    }

    async create(req: Request, res: Response) {
        const escolaRepository = getRepository(Escola)
        const escolaRequest: EscolaDTO = req.body;
        const escolaToCreated: Escola = escolaRepository.create(escolaRequest);

        await escolaRepository.save(escolaToCreated);

        return res.json(escolaToCreated);
    }
}

export default EscolaController