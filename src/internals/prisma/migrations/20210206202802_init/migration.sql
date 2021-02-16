-- CreateEnum
CREATE TYPE "WaypointType" AS ENUM ('HOTEL', 'SIGHTSEEING', 'POI', 'TRANSPORT');

-- CreateEnum
CREATE TYPE "PathType" AS ENUM ('TRAIN', 'BOAT', 'PLANE', 'PEDESTRIAN', 'CAR');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waypoint" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "WaypointType" NOT NULL DEFAULT E'POI',
    "tripId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Path" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "PathType" NOT NULL DEFAULT E'PEDESTRIAN',
    "tripId" INTEGER,
    "toId" INTEGER,
    "fromId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account.email_unique" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Path_toId_unique" ON "Path"("toId");

-- CreateIndex
CREATE UNIQUE INDEX "Path_fromId_unique" ON "Path"("fromId");

-- AddForeignKey
ALTER TABLE "Trip" ADD FOREIGN KEY ("ownerId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waypoint" ADD FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Path" ADD FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Path" ADD FOREIGN KEY ("toId") REFERENCES "Waypoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Path" ADD FOREIGN KEY ("fromId") REFERENCES "Waypoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;
