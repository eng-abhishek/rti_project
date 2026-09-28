-- CreateTable
CREATE TABLE "EmailOtpVerification" (
    "id" SERIAL NOT NULL,
    "email_id" VARCHAR(100) NOT NULL,
    "otp" INTEGER NOT NULL,

    CONSTRAINT "EmailOtpVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MobileOtpVerification" (
    "id" SERIAL NOT NULL,
    "mobile_id" VARCHAR(100) NOT NULL,
    "otp" INTEGER NOT NULL,

    CONSTRAINT "MobileOtpVerification_pkey" PRIMARY KEY ("id")
);
