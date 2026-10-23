import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = ["/", "/about", "/contact", "/solutions", "/projects", "/solutions/backup-power", "/solutions/business-communications", "/solutions/calling-sip", "/solutions/legacy-system-support", "/solutions/network-infrastructure", "/solutions/safety-systems","/solutions/video-surveillance"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
