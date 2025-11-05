import { z } from "zod";

export const locationSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Nome do local é obrigatório"),
  address: z.string().optional(),
  lat: z
    .number()
    .min(-90, "Latitude mínima é -90")
    .max(90, "Latitude máxima é 90"),
  lng: z
    .number()
    .min(-180, "Longitude mínima é -180")
    .max(180, "Longitude máxima é 180"),
  notes: z.string().optional(),
});

export const movieSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
  releaseYear: z
    .number()
    .min(1888, "Ano inválido (primeiro filme foi em 1888)")
    .max(new Date().getFullYear(), "Ano futuro não permitido"),
  rating: z.number().min(0).max(10).optional(),
  imageUrl: z.string().url("URL inválida").optional(),
  locations: z.array(locationSchema).optional(),
});

export const movieUpdateSchema = movieSchema.partial();

export type MovieSchema = z.infer<typeof movieSchema>;
export type MovieUpdateSchema = z.infer<typeof movieUpdateSchema>;
