import {MigrationInterface, QueryRunner} from "typeorm";

export class usermigration1647955495928 implements MigrationInterface {
    name = 'usermigration1647955495928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
