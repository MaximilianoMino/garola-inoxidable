import { contentful } from "@/lib/contentful/contentful";
import { mapBlogPost } from "@/lib/contentful/mapper";
import type { BlogPost } from "@/types";

export async function getSortedPosts(): Promise<BlogPost[]> {
  const res = await contentful.getEntries({
    content_type: "garolaInoxidable",
    order: ["sys.createdAt"],
  });

  return res.items.map(mapBlogPost).filter(Boolean) as BlogPost[];
}
