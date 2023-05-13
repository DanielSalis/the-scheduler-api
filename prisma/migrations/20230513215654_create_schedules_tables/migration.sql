-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "operational_day" TIMESTAMP(3),
    "cancelled" BOOLEAN DEFAULT false,
    "unity_id" TEXT NOT NULL,
    "user_creator_id" TEXT NOT NULL,
    "shift_id" TEXT NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules_users_beds" (
    "id" TEXT NOT NULL,
    "estimated_time" DOUBLE PRECISION,
    "schedule_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "bed_id" TEXT NOT NULL,

    CONSTRAINT "schedules_users_beds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_user_creator_id_fkey" FOREIGN KEY ("user_creator_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_shift_id_fkey" FOREIGN KEY ("shift_id") REFERENCES "shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules_users_beds" ADD CONSTRAINT "schedules_users_beds_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules_users_beds" ADD CONSTRAINT "schedules_users_beds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules_users_beds" ADD CONSTRAINT "schedules_users_beds_bed_id_fkey" FOREIGN KEY ("bed_id") REFERENCES "beds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
