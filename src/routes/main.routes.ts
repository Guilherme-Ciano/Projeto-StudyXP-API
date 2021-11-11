import express, { Router } from "express";
import session from "express-session";
import alunosRoutes from "./aluno.routes";
import professoresRoutes from "./professor.routes";
import sessionLog from "./session.routes";
import escolaRoutes from "./escola.routes";
import mobileRoute from "./mobile.routes";

const mainRoutes = Router();

mainRoutes.use(session({ secret: "studyxpaprenderonline2021" }));
mainRoutes.use(express.urlencoded({ extended: true }));

mainRoutes.use("/alunos", alunosRoutes);
mainRoutes.use("/professores", professoresRoutes);
mainRoutes.use("/escolas", escolaRoutes);
mainRoutes.use("/login", sessionLog);
mainRoutes.use("/mobile/login", mobileRoute);

export default mainRoutes;
