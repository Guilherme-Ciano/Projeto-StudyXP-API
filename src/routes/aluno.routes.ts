import { Router } from "express";
import FotosController from "../database/controllers/Fotos.controller";
import Foto from "../database/model/Foto";
import AlunoController from "./../database/controllers/Aluno.controller";
import tarefaRoutes from "./tarefa.routes";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_KLlR1Dyq2oilsXdMwyQJJul3duM=",
  privateKey: "private_2QoKy1tyTKVHrK8nzOA233tq5DA=",
  urlEndpoint: "https://ik.imagekit.io/6orp41xtyms/",
});

const alunosRoutes = Router();
const alunoController = new AlunoController();
const fotoController = new FotosController();

alunosRoutes.get("/index", alunoController.index);
alunosRoutes.post("/create", alunoController.create);
alunosRoutes.post("/update", alunoController.update);
alunosRoutes.get("/clearall", alunoController.deleteAll);
alunosRoutes.post("/clearunique", alunoController.deleteUnique);

alunosRoutes.post("/img", async (req, res) => {
  const { file, fileName } = req.body;
  const data = await imagekit.upload(
    {
      file: file,
      fileName,
    },
    (error, success) => {
      if (error) {
        console.log(error);
      } else {
        res.json({ url: success.url });
      }
    }
  );
});

alunosRoutes.use("/tarefas", tarefaRoutes);

export default alunosRoutes;
