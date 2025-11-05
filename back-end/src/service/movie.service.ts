import { prisma } from "../config/prisma.js";

interface MovieFilters {
  title?: string;
  genre?: string;
  year?: number;
  page?: number;
  limit?: number;
}

export async function getAllMovies(filters: MovieFilters) {
  const { title, genre, year, page = 1, limit = 10 } = filters;
  const skip = (page - 1) * limit;

  const where: any = {};

  if (title) {
    where.title = { contains: title, mode: "insensitive" };
  }

  if (year) {
    where.releaseYear = year;
  }

  if (genre) {
    where.genres = {
      some: {
        genre: {
          name: { equals: genre, mode: "insensitive" },
        },
      },
    };
  }

  const [movies, total] = await Promise.all([
    prisma.movie.findMany({
      where,
      include: {
        genres: { include: { genre: true } },
        platforms: { include: { platform: true } },
        locations: true,
      },
      skip,
      take: limit,
      orderBy: { releaseYear: "desc" },
    }),
    prisma.movie.count({ where }),
  ]);

  return {
    data: movies,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getMovieById(id: string) {
  return prisma.movie.findUnique({
    where: { id },
    include: {
      genres: { include: { genre: true } },
      platforms: { include: { platform: true } },
      locations: true,
    },
  });
}
export async function createMovie(data: any) {
  return prisma.movie.create({
    data: {
      title: data.title,
      description: data.description,
      releaseYear: data.releaseYear,
      rating: data.rating,
      imageUrl: data.imageUrl,
      locations: data.locations
        ? {
            create: data.locations.map((loc: any) => ({
              name: loc.name,
              address: loc.address,
              lat: loc.lat,
              lng: loc.lng,
              notes: loc.notes,
            })),
          }
        : undefined,
    },
    include: {
      locations: true,
    },
  });
}

export async function updateMovie(id: string, data: any) {
  return prisma.movie.update({
    where: { id },
    data,
  });
}

export async function deleteMovie(id: string) {
  return prisma.movie.delete({
    where: { id },
  });
}
