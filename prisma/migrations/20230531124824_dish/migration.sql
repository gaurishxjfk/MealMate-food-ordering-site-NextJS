-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "dishName" VARCHAR(50) NOT NULL,
    "description" VARCHAR(120) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL,
    "tagsArr" TEXT[],
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);
