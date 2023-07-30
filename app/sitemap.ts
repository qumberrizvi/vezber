import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

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
    ...users.map((user) => ({
      url: `https://vezber.com/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
