import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TabelaMaterias1624043723796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "materias",
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
        await queryRunner.dropTable("materias");
    }

}
