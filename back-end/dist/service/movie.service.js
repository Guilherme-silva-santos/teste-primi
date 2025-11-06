import { prisma } from "../config/prisma.js";
export async function getAllMovies(filters) {
    const { title, genre, year, page = 1, limit = 10 } = filters;
    const skip = (page - 1) * limit;
    const where = {};
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
export async function getMovieById(id) {
    return prisma.movie.findUnique({
        where: { id },
        include: {
            genres: { include: { genre: true } },
            platforms: { include: { platform: true } },
            locations: true,
        },
    });
}
export async function createMovie(data) {
    return prisma.movie.create({
        data: {
            title: data.title,
            description: data.description,
            releaseYear: data.releaseYear,
            rating: data.rating,
            imageUrl: data.imageUrl,
            locations: data.locations
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
        },
        include: { locations: true },
    });
}
export async function updateMovie(id, data) {
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
        },
        include: { locations: true },
    });
}
export async function deleteMovie(id) {
    return prisma.movie.delete({
        where: { id },
    });
}
