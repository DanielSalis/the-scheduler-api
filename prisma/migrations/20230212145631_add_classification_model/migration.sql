/*
  Warnings:

  - Added the required column `classification_id` to the `beds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "beds" ADD COLUMN     "classification_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "classifications" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "estimated_time" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "classifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "beds" ADD CONSTRAINT "beds_classification_id_fkey" FOREIGN KEY ("classification_id") REFERENCES "classifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
