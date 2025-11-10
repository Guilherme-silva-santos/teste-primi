import { Request, Response } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../service/movie.service.js";

export async function getAll(req: Request, res: Response) {
  const { title, genre, year, page, limit } = req.query;

  const filters = {
    title: title as string,
    genre: genre as string,
    year: year ? Number(year) : undefined,
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 10,
  };

  try {
    const result = await getAllMovies(filters);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar filmes" });
  }
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const movie = await getMovieById(id);
    if (!movie)
      return res.status(404).json({ message: "Filme não encontrado" });
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar filme" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    console.log(JSON.stringify(req.body, null, 2));
    const movie = await createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar filme" });
  }
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const movie = await updateMovie(id, req.body);
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar filme" });
  }
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteMovie(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar filme" });
  }
}
