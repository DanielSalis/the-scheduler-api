-- CreateTable
CREATE TABLE "unities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "hospital_id" TEXT NOT NULL,

    CONSTRAINT "unities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "unities" ADD CONSTRAINT "unities_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "hospitals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
