-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_role_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "user_role_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
