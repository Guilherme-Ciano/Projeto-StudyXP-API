import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Aluno from './Aluno'
import Professor from './Professor';

@Entity("tarefas")
export default class Tarefa {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    limite_data: Date;

    @Column()
    classe: string;

    @Column()
    xp: number;

    @OneToMany(() => Aluno, aluno => aluno.tarefas)
    @JoinColumn()
    aluno: Aluno[];

    @OneToOne(() => Professor)
    @JoinColumn()
    professor: Professor;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}