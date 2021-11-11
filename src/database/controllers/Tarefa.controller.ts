import { Request, Response } from "express";
import { Any, getRepository } from "typeorm";
import Tarefa from "./../model/Tarefa";

interface TarefaDTO {
  titulo: string;
  descricao: string;
  classe: string;
  limite_data: Date;
  xp: number;
  fileLink: string;
  //profId: string,
}

interface TarefaParaDeletar {
  id: number;
}

class TarefaController {
  async index(req: Request, res: Response) {
    const tarefaRepository = getRepository(Tarefa);
    const mostraTodasTarefas = await tarefaRepository.find();

    return res.json(mostraTodasTarefas);
  }

  async create(req: Request, res: Response) {
    const tarefaRepository = getRepository(Tarefa);
    const tarefaRequest: TarefaDTO = req.body;
    const tarefaToCreated: Tarefa = tarefaRepository.create(tarefaRequest);
    //await tarefaRepository.createQueryBuilder('tarefas').innerJoin('tarefas.professorId', tarefaRequest.profId)

    await tarefaRepository.save(tarefaToCreated);

    return res.json(tarefaToCreated);
  }

  async deleteAll(req: Request, res: Response) {
    let mensagemDeStatus = {
      status: "",
      message: "",
    };

    const tarefaRepository = getRepository(Tarefa);
    await tarefaRepository.query("DELETE FROM tarefas").then((result) => {
      if (result[1] === 0) {
        mensagemDeStatus.status = "Erro";
        mensagemDeStatus.message = "Não há elementos na tabela";
      } else {
        mensagemDeStatus.status = "Sucesso";
        mensagemDeStatus.message =
          "Foram removidos [" + result[1] + "] registros da tabela";
      }
    });

    return res.json(mensagemDeStatus);
  }

  async deleteUnique(req: Request, res: Response) {
    let mensagemDeStatus = {
      status: "",
      message: "",
    };

    const tarefaRepository = getRepository(Tarefa);
    const tarefaRequest: TarefaParaDeletar = req.body;
    await tarefaRepository
      .query("DELETE FROM tarefas WHERE id =" + tarefaRequest.id)
      .then((result) => {
        if (result[1] === 0) {
          mensagemDeStatus.status = "Erro";
          mensagemDeStatus.message = "Não foi encontrado o elemento na tabela";
        } else {
          mensagemDeStatus.status = "Sucesso";
          mensagemDeStatus.message = "Registro apagado com sucesso";
        }
      });

    return res.json(mensagemDeStatus);
  }

  async TarefasPendentes(req: Request, res: Response) {
    const tarefaRepository = getRepository(Tarefa);
    const mostraTodasTarefasPendentes = await tarefaRepository.query(
      "SELECT * FROM tarefas WHERE flag = 'pendente'"
    );

    return res.json(mostraTodasTarefasPendentes);
  }

  async TarefasConcluidas(req: Request, res: Response) {
    const tarefaRepository = getRepository(Tarefa);
    const mostraTodasTarefasPendentes = await tarefaRepository.query(
      "SELECT * FROM tarefas WHERE flag = 'concluida'"
    );

    return res.json(mostraTodasTarefasPendentes);
  }

  async concluirTarefa(req: Request, res: Response) {
    let mensagemDeStatus = {
      status: "Sucesso",
      message: "Cadastro Atualizado",
    };

    const id = req.query.id;
    const tarefaRepository = getRepository(Tarefa);
    let tarefaRequest: Tarefa = req.body;
    let tarefaExists: any = await tarefaRepository.findOne({ where: { id } });
    if (tarefaExists && id && tarefaRequest) {
      await tarefaRepository.update(tarefaExists.id, tarefaRequest);
    }
    return res.json(mensagemDeStatus);
  }

  async voltarTarefa(req: Request, res: Response) {
    let mensagemDeStatus = {
      status: "Sucesso",
      message: "Cadastro Atualizado",
    };

    const id = req.query.id;
    const tarefaRepository = getRepository(Tarefa);
    let tarefaRequest: Tarefa = req.body;
    let tarefaExists: any = await tarefaRepository.findOne({ where: { id } });
    if (tarefaExists && id && tarefaRequest) {
      await tarefaRepository.update(tarefaExists.id, tarefaRequest);
    }
    return res.json(mensagemDeStatus);
  }
}

export default TarefaController;
