import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { dish } from "../../../types/types";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { name, page } = req.query;
    const ITEMS_PER_PAGE = 2;
    const currentPage = Number(page) || 1;

    try {
      let dishData: dish[] = [];

      let totalCount = await prisma.dish.count();

      if (name) {
        dishData = await prisma.dish.findMany({
          where: {
            dishName: {
              contains: name.toString(),
              mode: "insensitive",
            },
          },
          skip: (currentPage - 1) * ITEMS_PER_PAGE,
          take: ITEMS_PER_PAGE,
          orderBy: {
            createdAt: "asc",
          },
        });

        totalCount = await prisma.dish.count({
          where: {
            dishName: {
              contains: name.toString(),
              mode: "insensitive",
            },
          },
        });
      } else {
        dishData = await prisma.dish.findMany({
          skip: (currentPage - 1) * ITEMS_PER_PAGE,
          take: ITEMS_PER_PAGE,
          orderBy: {
            createdAt: "asc",
          },
        });
      }
      const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
      res.status(200).json({
        dishData,
        totalPages,
        currentPage,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to fetch dish" });
    }
  }
}
