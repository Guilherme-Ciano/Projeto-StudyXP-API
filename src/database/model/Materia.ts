import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Aluno from "./Aluno";
import Escola from "./Escola";
import Professor from './Professor';
import Tarefa from "./Tarefa";


@Entity("materias")
export default class Materia {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    codEscola: string;

    @ManyToMany(()=> Aluno)
    @JoinColumn()
    aluno: Aluno[];

    @ManyToMany(()=> Professor)
    @JoinColumn()
    professor: Professor[];

    @ManyToMany(()=> Tarefa)
    @JoinColumn()
    tarefas: Tarefa[];

    @ManyToOne(()=> Escola, escola => escola.materia)
    @JoinColumn()
    escola: Escola;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}