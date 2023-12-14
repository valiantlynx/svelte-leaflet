import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://animevariant.org',
      lastModified: new Date(),
    },
    {
      url: 'https://animevariant.org/welcome',
      lastModified: new Date(),
    },
    {
      url: 'https://animevariant.org/popular',
      lastModified: new Date(),
    },
      {
        url: 'https://animevariant.org/settings',
        lastModified: new Date(),
      },
      {
        url: 'https://animevariant.org/profile',
        lastModified: new Date(),
      }
  ];
}