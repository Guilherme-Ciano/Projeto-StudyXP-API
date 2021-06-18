import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Escola from "./Escola";
import Tarefa from './Tarefa';
import Materia from './Materia';

@Entity("alunos")
export default class Aluno {
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
    ra: string;

    @Column()
    grade: number;

    @Column()
    level: number;

    @ManyToOne(() => Tarefa, tarefa => tarefa.aluno)
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