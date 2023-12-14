import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://animevariant.com',
      lastModified: new Date(),
    },
    {
      url: 'https://animevariant.com/welcome',
      lastModified: new Date(),
    },
    {
      url: 'https://animevariant.com/popular',
      lastModified: new Date(),
    },
    {
        url: 'https://animevariant.com/recent',
        lastModified: new Date(),
      },
      {
        url: 'https://animevariant.com/settings',
        lastModified: new Date(),
      },
      {
        url: 'https://animevariant.com/profile',
        lastModified: new Date(),
      },
      {
        url: 'https://animevariant.com/genre-list',
        lastModified: new Date(),
      },
  ];
}