import type { MetadataRoute } from 'next';
import { caseStudyProjects } from 'src/lib/projects';
import { SITE } from 'src/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ['', '/resume', '/portfolio', '/kontaktai', '/privatumas'].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const caseStudies = caseStudyProjects.map((project) => ({
    url: `${SITE.url}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudies];
}
