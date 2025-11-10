import { z } from "zod";

export const movieSchema = z.object({
  title: z
    .string()
    .min(2, "O título deve ter pelo menos 2 caracteres")
    .max(100, "O título deve ter no máximo 100 caracteres"),
  year: z
    .string()
    .min(4, "Ano inválido")
    .max(4, "Ano inválido")
    .regex(/^\d{4}$/, "O ano deve conter 4 dígitos numéricos"),
  rating: z
    .string()
    .regex(
      /^([0-9]|10)(\.[0-9])?$/,
      "A avaliação deve ser um número de 0 a 10"
    ),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(500, "A descrição deve ter no máximo 500 caracteres"),
  placeName: z
    .string()
    .min(2, "O nome do local deve ter pelo menos 2 caracteres")
    .max(100, "O nome do local deve ter no máximo 100 caracteres"),
  address: z
    .string()
    .min(5, "O endereço deve ter pelo menos 5 caracteres")
    .max(150, "O endereço deve ter no máximo 150 caracteres"),
  latitude: z
    .string()
    .regex(/^[-+]?[0-9]*\.?[0-9]+$/, "Latitude inválida")
    .optional(),
  longitude: z
    .string()
    .regex(/^[-+]?[0-9]*\.?[0-9]+$/, "Longitude inválida")
    .optional(),
  notes: z
    .string()
    .max(200, "As observações devem ter no máximo 200 caracteres")
    .optional(),
  platforms: z.array(
    z.object({
      platformId: z.string().uuid({ message: "Selecione uma plataforma" }),
    })
  ),
});

export type MovieFormData = z.infer<typeof movieSchema>;
