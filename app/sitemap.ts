import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

import { routing } from "../i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://four-bridges.vercel.app/";

function getLocalizedRoutes(dir: string, parent = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.name === "layout.tsx") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("[")) {
        continue;
      }

      const nestedRoutes = getLocalizedRoutes(fullPath, `${parent}/${entry.name}`);
      routes.push(...nestedRoutes);
    }
  }

  const hasPage = fs.existsSync(path.join(dir, "page.tsx"));

  if (hasPage) {
    routes.push(parent || "/");
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = getLocalizedRoutes(path.join(process.cwd(), "app", "[locale]"));
  const uniqueRoutes = [...new Set(localizedRoutes)];

  return routing.locales.flatMap((locale) =>
    uniqueRoutes.map((route) => {
      const normalizedRoute = route === "/" ? `/${locale}` : `/${locale}${route}`;

      return {
        url: new URL(normalizedRoute, siteUrl).toString(),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "/" ? 1 : 0.7,
      };
    }),
  );
}
