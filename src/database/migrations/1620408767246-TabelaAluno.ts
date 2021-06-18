import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TabelaAluno1620408767246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "alunos",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: "nome",
                            type: "varchar",
                        },
                        {
                            name: "email",
                            type: "varchar",
                        },
                        {
                            name: "password",
                            type: "varchar",
                        },
                        {
                            name: "ra",
                            type: "varchar",
                        },
                        {
                            name: "phone",
                            type: "varchar",
                        },
                        {
                            name: "grade",
                            type: "int",
                        },
                        {
                            name: "level",
                            type: "int",
                            default: 0,
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()",
                        },
                    ]
                }
            ),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alunos");
    }

}
