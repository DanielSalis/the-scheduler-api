/*
  Warnings:

  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Shift";

-- CreateTable
CREATE TABLE "shifts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "shifts_pkey" PRIMARY KEY ("id")
);
