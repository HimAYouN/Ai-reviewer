/*
  Warnings:

  - You are about to drop the column `subscriptionRenewaAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "subscriptionRenewaAt",
ADD COLUMN     "subscriptionRenewsAt" TIMESTAMP(3);
