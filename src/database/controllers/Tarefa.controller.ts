import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Tarefa from './../model/Tarefa';

interface TarefaDTO {
    titulo: string,
    descricao: string,
    classe: string,
    limite_data: Date,
}

class TarefaController {
    async index(req: Request, res: Response){
        const tarefaRepository = getRepository(Tarefa)
        const mostraTodasTarefas = await tarefaRepository.find();

        return res.json(mostraTodasTarefas)
    }

    async create(req: Request, res: Response){
        const tarefaRepository = getRepository(Tarefa)
        const tarefaRequest: TarefaDTO = req.body;
        const tarefaToCreated: Tarefa = tarefaRepository.create(tarefaRequest);

        await tarefaRepository.save(tarefaToCreated);

        return res.json(tarefaToCreated)
    }
}

export default TarefaController
