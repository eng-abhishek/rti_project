-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "YesNo" AS ENUM ('Y', 'N');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "is_indian" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile_no" TEXT NOT NULL,
    "father_name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "address" TEXT NOT NULL,
    "state_id" TEXT NOT NULL,
    "district_id" TEXT NOT NULL,
    "pin_code" TEXT NOT NULL,
    "is_bpl" "YesNo" NOT NULL,
    "bpl_file" TEXT NOT NULL,
    "security_qs" TEXT NOT NULL,
    "security_ans" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_no_key" ON "User"("mobile_no");
