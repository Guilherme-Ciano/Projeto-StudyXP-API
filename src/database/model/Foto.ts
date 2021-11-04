import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Aluno from "./Aluno";

@Entity("fotos")
export default class Foto {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    filename: string;

    @Column()
    filepath: string;

    @Column()
    mimetype: string;

    @Column()
    size: number;

    @Column()
    ra: string;

    @Column()
    grade: number;

    @Column()
    level: number;

    @OneToOne(() => Aluno)
    @JoinColumn()
    idAluno: Aluno["id"];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}