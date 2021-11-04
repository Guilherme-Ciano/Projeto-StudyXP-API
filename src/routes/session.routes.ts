import { response, Router } from "express";
import { getRepository } from "typeorm";
import Aluno from "./../database/model/Aluno";
import Professor from "./../database/model/Professor";
import crypto from "crypto";

const sessionLog = Router();

sessionLog.post("/", async (req, res) => {
  // Token de Segurança
  var current_date = new Date().valueOf().toString();
  var random = Math.random().toString();
  var hashCod = crypto
    .createHash("sha1")
    .update(current_date + random)
    .digest("hex");

  // Verificação
  const { email, password } = req.body;
  const alunoRepository = getRepository(Aluno);
  let aluno = await alunoRepository
    .query(
      "select * from alunos where email = '" +
        email +
        "' and password= '" +
        password +
        "'"
    )
    .then((result) => {
      if (result.length === 0) {
        return false;
      } else {
        let responseAluno: Object = {
          data: result,
          hash: hashCod,
          type: "A",
        };
        return res.json(responseAluno);
      }
    }); //  findOne({where: { email }} && {where: { password }});

  if (!aluno) {
    console.log("entro");
    const professorRepository = getRepository(Professor);
    let professor = await professorRepository.query(
      "select * from professores where email = '" +
        email +
        "' and password= '" +
        password +
        "'"
    );

    let responseProf = {
      data: professor,
      hash: hashCod,
      type: "P",
    };

    if (professor) {
      return res.json(responseProf);
    } else {
      return res.json({
        msg: "ERRO!",
      });
    }
  }
});

export default sessionLog;
