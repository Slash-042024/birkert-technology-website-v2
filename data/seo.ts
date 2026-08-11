import type { Metadata } from "next";
import { siteName } from "@/data/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://birkerttechnology.com";

export const defaultDescription =
  "Birkert Technology builds custom software, modern websites, and practical digital products with a focus on clarity, reliability, and long-term maintainability.";

export const defaultOgImage = "/company-logo.png";

const defaultKeywords = [
  "Birkert Technology",
  "custom software development",
  "website development",
  "Next.js development",
  "product engineering",
  "web application development",
];

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export function createMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  image = defaultOgImage,
}: CreateMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...(keywords ?? [])],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      title,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
