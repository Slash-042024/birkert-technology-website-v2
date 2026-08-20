import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { siteUrl } from "@/data/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: new URL(project.href, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...portfolioEntries];
}
