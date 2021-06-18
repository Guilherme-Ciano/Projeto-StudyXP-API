import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TabelaEscola1624040031995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "escolas",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: "phone",
                            type: "varchar",
                        },
                        {
                            name: "nome",
                            type: "varchar",
                        },
                        {
                            name: "nome_adm",
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
                            name: "codEscola",
                            type: "varchar",
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
        await queryRunner.dropTable("escolas");
    }

}
