import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Aluno from "./Aluno";
import Professor from './Professor';
import Materia from './Materia';


@Entity("escolas")
export default class Escola {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    phone: string;

    @Column()
    nome: string;

    @Column()
    nome_adm: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    codEscola: string;

    @OneToMany(()=> Aluno, aluno => aluno.escola)
    @JoinColumn()
    aluno: Aluno[];

    @OneToMany(()=> Professor, professor => professor.escola)
    @JoinColumn()
    professor: Professor[];

    @OneToMany(()=> Materia, materia => materia.escola)
    @JoinColumn()
    materia: Materia[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}