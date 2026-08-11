import { createClient } from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    "Missing Contentful environment variables. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env",
  );
}

export const contentful = createClient({
  space,
  accessToken,
});
