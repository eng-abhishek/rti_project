/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `mobile_no` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Changed the type of `is_indian` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('is_rti', 'is_fa', 'is_admin');

-- CreateEnum
CREATE TYPE "RtiStatus" AS ENUM ('U', 'PP', 'IR', 'AR', 'CR', 'DR', 'RR', 'PCR', 'TR', 'PAIDCR');

-- CreateEnum
CREATE TYPE "RtiType" AS ENUM ('Online', 'Offline');

-- CreateEnum
CREATE TYPE "AppealStatus" AS ENUM ('U', 'IR', 'AR', 'CR', 'DR', 'RR', 'PCR', 'TR');

-- CreateEnum
CREATE TYPE "InfoStatus" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "CommentType" AS ENUM ('RTI', 'FA');

-- AlterTable
ALTER TABLE "EmailOtpVerification" ADD COLUMN     "expire_at" TIMESTAMP(3),
ADD COLUMN     "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "MobileOtpVerification" ADD COLUMN     "expire_at" TIMESTAMP(3),
ADD COLUMN     "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_role" "UserRole",
DROP COLUMN "is_indian",
ADD COLUMN     "is_indian" "YesNo" NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "mobile_no" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "bpl_file" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserLoginInfo" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "login_attempts" INTEGER,
    "login_at" TIMESTAMP(3),
    "logout_at" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLoginInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RtiInformation" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "ref_num" VARCHAR(20) NOT NULL,
    "ref_year" VARCHAR(10) NOT NULL,
    "diary_num" VARCHAR(20) NOT NULL,
    "diary_year" VARCHAR(20) NOT NULL,
    "rti_type" "RtiType" NOT NULL,
    "status" "RtiStatus" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "rejecte_opjection" VARCHAR(100),
    "file" VARCHAR(50),
    "admin_id" INTEGER,
    "admin_role" VARCHAR(10),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RtiInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FirstAppealInformation" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rti_id" INTEGER NOT NULL,
    "ref_num" VARCHAR(20) NOT NULL,
    "ref_year" VARCHAR(10) NOT NULL,
    "diary_num" VARCHAR(20) NOT NULL,
    "diary_year" VARCHAR(20) NOT NULL,
    "rti_type" "RtiType" NOT NULL,
    "status" "AppealStatus" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "rejecte_opjection" VARCHAR(100),
    "file" VARCHAR(50),
    "admin_id" INTEGER,
    "admin_role" VARCHAR(10),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FirstAppealInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "comment_type" "CommentType" NOT NULL,
    "rti_id" INTEGER,
    "appeal_id" INTEGER,
    "admin_id" INTEGER NOT NULL,
    "admin_role" VARCHAR(10) NOT NULL,
    "description" TEXT NOT NULL,
    "comment_status" VARCHAR(10) NOT NULL,
    "info_status" "InfoStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserLoginInfo_user_id_idx" ON "UserLoginInfo"("user_id");

-- CreateIndex
CREATE INDEX "UserLoginInfo_login_at_idx" ON "UserLoginInfo"("login_at");

-- CreateIndex
CREATE INDEX "RtiInformation_user_id_idx" ON "RtiInformation"("user_id");

-- CreateIndex
CREATE INDEX "RtiInformation_admin_id_idx" ON "RtiInformation"("admin_id");

-- CreateIndex
CREATE INDEX "RtiInformation_status_idx" ON "RtiInformation"("status");

-- CreateIndex
CREATE INDEX "RtiInformation_ref_num_idx" ON "RtiInformation"("ref_num");

-- CreateIndex
CREATE INDEX "RtiInformation_ref_year_idx" ON "RtiInformation"("ref_year");

-- CreateIndex
CREATE INDEX "RtiInformation_diary_num_idx" ON "RtiInformation"("diary_num");

-- CreateIndex
CREATE INDEX "RtiInformation_diary_year_idx" ON "RtiInformation"("diary_year");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_user_id_idx" ON "FirstAppealInformation"("user_id");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_rti_id_idx" ON "FirstAppealInformation"("rti_id");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_admin_id_idx" ON "FirstAppealInformation"("admin_id");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_status_idx" ON "FirstAppealInformation"("status");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_ref_num_idx" ON "FirstAppealInformation"("ref_num");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_ref_year_idx" ON "FirstAppealInformation"("ref_year");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_diary_num_idx" ON "FirstAppealInformation"("diary_num");

-- CreateIndex
CREATE INDEX "FirstAppealInformation_diary_year_idx" ON "FirstAppealInformation"("diary_year");

-- CreateIndex
CREATE INDEX "Comment_rti_id_idx" ON "Comment"("rti_id");

-- CreateIndex
CREATE INDEX "Comment_appeal_id_idx" ON "Comment"("appeal_id");

-- CreateIndex
CREATE INDEX "Comment_admin_id_idx" ON "Comment"("admin_id");

-- CreateIndex
CREATE INDEX "Comment_comment_type_idx" ON "Comment"("comment_type");

-- CreateIndex
CREATE INDEX "Comment_info_status_idx" ON "Comment"("info_status");

-- CreateIndex
CREATE INDEX "EmailOtpVerification_email_id_idx" ON "EmailOtpVerification"("email_id");

-- CreateIndex
CREATE INDEX "EmailOtpVerification_expire_at_idx" ON "EmailOtpVerification"("expire_at");

-- CreateIndex
CREATE INDEX "MobileOtpVerification_mobile_id_idx" ON "MobileOtpVerification"("mobile_id");

-- CreateIndex
CREATE INDEX "MobileOtpVerification_expire_at_idx" ON "MobileOtpVerification"("expire_at");

-- AddForeignKey
ALTER TABLE "UserLoginInfo" ADD CONSTRAINT "UserLoginInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RtiInformation" ADD CONSTRAINT "RtiInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RtiInformation" ADD CONSTRAINT "RtiInformation_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FirstAppealInformation" ADD CONSTRAINT "FirstAppealInformation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FirstAppealInformation" ADD CONSTRAINT "FirstAppealInformation_rti_id_fkey" FOREIGN KEY ("rti_id") REFERENCES "RtiInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FirstAppealInformation" ADD CONSTRAINT "FirstAppealInformation_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_rti_id_fkey" FOREIGN KEY ("rti_id") REFERENCES "RtiInformation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_appeal_id_fkey" FOREIGN KEY ("appeal_id") REFERENCES "FirstAppealInformation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
