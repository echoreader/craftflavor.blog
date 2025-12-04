const isProd = process.env.NODE_ENV === "production";

export const siteUrl = isProd
  ? "https://craftflavor.blog"
  : "http://localhost:3000";