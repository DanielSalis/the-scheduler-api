/*
  Warnings:

  - Added the required column `unity_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "unity_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
