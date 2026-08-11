// getPostBySlug.ts

import { contentful } from "@/lib/contentful/contentful";

export async function getPostBySlug(slug: string) {
  const res = await contentful.getEntries({
    content_type: "garolaInoxidable",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items[0] ?? null;
}
