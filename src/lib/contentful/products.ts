import type { Entry } from "contentful";
import type { Product } from "@/types";
import { contentful } from "./contentful";

function mapProduct(entry: Entry<any>): Product {
  const fields = entry.fields;

  return {
    title: fields.title as string,
    slug: fields.slug as string,
    category: fields.category as string[],
    description: (fields.description as string) ?? "",
    image: fields.image?.fields?.file?.url
      ? `https:${fields.image.fields.file.url}`
      : "",
    pdf: fields.pdf?.fields?.file?.url
      ? `https:${fields.pdf.fields.file.url}`
      : undefined,
    priority: (fields.priority as number) ?? 10,
  };
}

export async function getProducts(): Promise<Product[]> {
  const res = await contentful.getEntries({
    content_type: "garola_productos",
    order: ["fields.priority"],
  });

  return res.items.map(mapProduct);
}

export async function getFeaturedProducts(limit = 10): Promise<Product[]> {
  const res = await contentful.getEntries({
    content_type: "garola_productos",
    order: ["fields.priority"],
    limit,
  });

  return res.items.map(mapProduct);
}
