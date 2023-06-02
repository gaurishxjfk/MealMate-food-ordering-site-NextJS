import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { dishId } = req.query;
  try {
    const deletedDish = await prisma.dish.delete({
      where: {
        id: parseInt(dishId as string, 10),
      },
    });

    res.status(200).json(deletedDish);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to delete dish" });
  }
}
