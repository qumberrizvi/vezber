import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: "https://vezber.com",
      lastModified: new Date(),
    },
    {
      url: "https://vezber.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://vezber.com/terms",
      lastModified: new Date(),
    },
    {
      url: "https://vezber.com/privacy",
      lastModified: new Date(),
    },
  ];
}
