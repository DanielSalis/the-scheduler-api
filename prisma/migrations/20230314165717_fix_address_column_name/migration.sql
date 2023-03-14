/*
  Warnings:

  - You are about to drop the column `addres` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `addres` on the `hospitals` table. All the data in the column will be lost.
  - Added the required column `address` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `hospitals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "addres",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hospitals" DROP COLUMN "addres",
ADD COLUMN     "address" TEXT NOT NULL;
