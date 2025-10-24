import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hierontaleopessi.fi/sitemap.xml',
    host: 'hierontaleopessi.fi',
  };
}