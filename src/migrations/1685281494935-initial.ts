import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685281494935 implements MigrationInterface {
    name = 'Initial1685281494935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Repairs" ("id" SERIAL NOT NULL, "carId" integer NOT NULL, "clientId" integer NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "works" character varying NOT NULL, "cost" integer NOT NULL, CONSTRAINT "PK_67ac7a2713119a4fcc041ff5450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Repairs"`);
    }

}
