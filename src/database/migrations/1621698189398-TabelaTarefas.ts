import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TabelaTarefas1621698189398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tarefas",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "titulo",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "classe",
            type: "varchar",
          },
          {
            name: "xp",
            type: "int",
          },
          {
            name: "flag",
            type: "varchar",
          },
          {
            name: "fileLink",
            type: "varchar",
          },
          {
            name: "limite_data",
            type: "timestamp",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tarefas");
  }
}
