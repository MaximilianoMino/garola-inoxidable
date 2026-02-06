import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    pubDatetime: z.coerce.date(), // Cambiado a z.coerce.date()
    modDatetime: z.coerce.date().optional(), // Agrega esto si lo usas
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
