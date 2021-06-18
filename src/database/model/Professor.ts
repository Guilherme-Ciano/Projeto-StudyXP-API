import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Escola from "./Escola";
import Materia from "./Materia";
import Tarefa from "./Tarefa";

@Entity("professores")
export default class Professor {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    codEscola: string;

    @OneToMany(() => Tarefa, tarefa => tarefa.aluno)
    @JoinColumn()
    tarefas: Tarefa[];

    @OneToOne(() => Escola)
    @JoinColumn()
    escola: Escola;

    @OneToMany(() => Materia, materia => materia.aluno)
    @JoinColumn()
    materia: Materia[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}