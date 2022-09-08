/*
  Warnings:

  - Added the required column `cityName` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `className` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolName` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "cityName" TEXT NOT NULL,
ADD COLUMN     "className" TEXT NOT NULL,
ADD COLUMN     "grade" BIGINT NOT NULL,
ADD COLUMN     "schoolName" TEXT NOT NULL;
