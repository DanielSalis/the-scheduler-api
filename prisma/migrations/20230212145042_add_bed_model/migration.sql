-- CreateTable
CREATE TABLE "beds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unity_id" TEXT NOT NULL,

    CONSTRAINT "beds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "beds" ADD CONSTRAINT "beds_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
