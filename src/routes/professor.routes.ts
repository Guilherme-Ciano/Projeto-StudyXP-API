import { Router } from "express";
import ProfessorController from "./../database/controllers/Professor.controller";
import materiaRoutes from "./materia.routes";
import tarefaRoutes from "./tarefa.routes";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_KLlR1Dyq2oilsXdMwyQJJul3duM=",
  privateKey: "private_2QoKy1tyTKVHrK8nzOA233tq5DA=",
  urlEndpoint: "https://ik.imagekit.io/6orp41xtyms/",
});

const professoresRoutes = Router();
const professorController = new ProfessorController();

professoresRoutes.get("/index", professorController.index);
professoresRoutes.post("/create", professorController.create);

professoresRoutes.get("/clearall", professorController.deleteAll);
professoresRoutes.post("/clearunique", professorController.deleteUnique);

professoresRoutes.post("/img", async (req, res) => {
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

professoresRoutes.use("/tarefas", tarefaRoutes);
professoresRoutes.use("/materias", materiaRoutes);

export default professoresRoutes;
