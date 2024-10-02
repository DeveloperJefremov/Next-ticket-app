/*
  Warnings:

  - You are about to drop the column `assiignedToUserId` on the `ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `assiignedToUserId`,
    ADD COLUMN `assignedToUserId` INTEGER NULL;
