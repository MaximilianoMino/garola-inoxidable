import { getSortedPosts } from "./getSortedPosts";
import type { BlogPost } from "@/types";

const getPostsByTag = (posts: BlogPost[], tag: string) => getSortedPosts();

export default getPostsByTag;
