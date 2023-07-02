import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1688336835933 implements MigrationInterface {
  name = 'NewMigration1688336835933';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appointment" ("appointment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "car_id" character varying NOT NULL, "details" character varying DEFAULT '', "arrival_date" TIMESTAMP NOT NULL DEFAULT now(), "departure_date" TIMESTAMP, "status" character varying NOT NULL DEFAULT 'pending', "mechanic" uuid, CONSTRAINT "PK_ee9f73735a635356d4da9bd3e69" PRIMARY KEY ("appointment_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "mechanical" ("mechanic_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL DEFAULT '', "phone_address" character varying NOT NULL DEFAULT '', "dni" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_1a18a44d3d2fe80fd1bedd3e99c" PRIMARY KEY ("mechanic_id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD CONSTRAINT "FK_9e53ec30e07a75db17afeddd1fa" FOREIGN KEY ("mechanic") REFERENCES "mechanical"("mechanic_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointment" DROP CONSTRAINT "FK_9e53ec30e07a75db17afeddd1fa"`,
    );
    await queryRunner.query(`DROP TABLE "mechanical"`);
    await queryRunner.query(`DROP TABLE "appointment"`);
  }
}
