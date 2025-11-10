import { Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.js";
import { MovieFilters, MovieInput } from "../types/movie.js";

export async function getAllMovies(filters: MovieFilters) {
  const { title, genre, year, page = 1, limit = 10 } = filters;
  const skip = (page - 1) * limit;

  const where: Prisma.MovieWhereInput = {};

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
      platforms: {
        include: {
          platform: true,
        },
      },
      locations: true,
    },
  });
}

export async function createMovie(data: MovieInput) {
  try {
    const movie = await prisma.movie.create({
      data: {
        title: data.title,
        description: data.description,
        releaseYear: data.releaseYear,
        rating: data.rating,
        imageUrl: data.imageUrl,

        locations: data.locations?.length
          ? {
              create: data.locations.map((loc) => ({
                name: loc.name,
                address: loc.address,
                lat: loc.lat,
                lng: loc.lng,
                notes: loc.notes,
              })),
            }
          : undefined,

        platforms: data.platforms?.length
          ? {
              create: data.platforms.map((p) => ({
                url: p.url ?? null,
                platform: { connect: { id: p.platformId } },
              })),
            }
          : undefined,
      },
      include: {
        locations: true,
        platforms: { include: { platform: true } },
      },
    });

    return movie;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateMovie(id: string, data: MovieInput) {
  return prisma.movie.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      releaseYear: data.releaseYear,
      rating: data.rating,
      imageUrl: data.imageUrl,

      locations: data.locations
        ? {
            deleteMany: {
              NOT: data.locations
                .filter((loc) => loc.id)
                .map((loc) => ({ id: loc.id })),
            },
            upsert: data.locations.map((loc) => ({
              where: { id: loc.id || "" },
              update: {
                name: loc.name,
                address: loc.address,
                lat: loc.lat,
                lng: loc.lng,
                notes: loc.notes,
              },
              create: {
                name: loc.name,
                address: loc.address,
                lat: loc.lat,
                lng: loc.lng,
                notes: loc.notes,
              },
            })),
          }
        : undefined,

      platforms: data.platforms
        ? {
            deleteMany: {},
            create: data.platforms.map((p) => ({
              url: p.url ?? null,
              platform: { connect: { id: p.platformId } },
            })),
          }
        : undefined,
    },
    include: {
      locations: true,
      platforms: { include: { platform: true } },
    },
  });
}

export async function deleteMovie(id: string) {
  return prisma.movie.delete({
    where: { id },
  });
}
