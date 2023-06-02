import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { dish } from "../../../types/types";

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { name } = req.query;

    try {
      let dishData: dish | dish[];

      if (name) {
        dishData = await prisma.dish.findMany({
          where: {
            dishName: {
              contains: name.toString(),
              mode: "insensitive",
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        });
      } else {
        dishData = await prisma.dish.findMany({
          orderBy: {
            createdAt: "asc",
          },
        });
      }

      res.status(200).json(dishData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to fetch dish" });
    }
  }
};
