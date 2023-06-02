import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { dishName, description, price, available, tagsArr, image } =
      req.body;

    try {
      const createdDish = await prisma.dish.create({
        data: {
          dishName,
          description,
          price,
          available,
          tagsArr,
          image
        },
      });

      res.status(201).json(createdDish);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to create dish" });
    }
  } else if (req.method === "PATCH") {
    const { dishName, description, price, available, tagsArr, image, id } =
      req.body;

    try {
      const updatedDish = await prisma.dish.update({
        where: { id: id },
        data: {
          dishName,
          description,
          price,
          available,
          tagsArr,
          image,
        },
      });

      res.status(201).json(updatedDish);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to update dish" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
