import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  publishedAt: Date;
  content: Document;
}

export interface BlogPostFields {
  title: string;
  slug: string;
  description: string;
  category: string;
  pubDatetime: string;
  modDatetime?: string;
  draft: boolean;
  tags?: string[];
  image?: any;
  content: any;
}

export interface Product {
  title: string;
  slug: string;
  category: string[];
  description: string;
  image: string;
  pdf?: string;
  priority: number;
}
