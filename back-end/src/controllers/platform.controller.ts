import { Request, Response } from "express";
import { getAllPlatforms } from "../service/platform.service.js";

export async function listPlatforms(req: Request, res: Response) {
  try {
    const platforms = await getAllPlatforms();
    res.json(platforms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar plataformas" });
  }
}
