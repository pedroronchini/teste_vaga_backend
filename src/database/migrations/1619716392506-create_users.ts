import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1619716392506 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
			name: 'users',
			columns: [
				{
					name: 'id',
					type: 'integer',
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},

				{
					name: 'name',
					type: 'varchar',
				},

				{
					name: 'lastname',
					type: 'varchar',
				},

				{
					name: 'nickname',
					type: 'varchar',
				},

				{
					name: 'address',
					type: 'varchar',
				},

				{
					name: 'bio',
					type: 'text',
				},

				{
					name: 'createdAt',
					type: 'date',
				},

				{
					name: 'updatedAt',
					type: 'date',
				}
			]
		}));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users');
  }

}
