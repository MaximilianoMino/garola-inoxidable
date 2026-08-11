import type { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import type { BlogPost } from "@/types";

export function mapBlogPost(entry: Entry<any>): BlogPost {
  const fields = entry.fields;

  if (!fields.slug || !fields.title || !fields.content) {
    throw new Error(`Post inválido en Contentful: ${entry.sys.id}`);
  }

  return {
    slug: fields.slug as string,
    title: fields.title as string,
    description: (fields.description as string) ?? "",
    category: (fields.category as string) ?? "General",
    publishedAt: new Date(entry.sys.createdAt),
    image: fields.image?.fields?.file?.url
      ? `https:${fields.image.fields.file.url}`
      : undefined,
    content: fields.content as Document,
  };
}
