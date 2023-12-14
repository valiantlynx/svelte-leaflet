type Endpoint = {
    path: string;
    description: string;
    params: Record<string, string>;
};

type API = {
    version: string;
    author: string;
    description: string;
    endpoints: Endpoint[];
};

type HomeProps = {
    api: API;
};

type Users = {
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
    items: []
}

type PopularAnime = {
    results: PopularAnimeProps[];
};

type PopularAnimeProps = {
    title: string,
    id: string,
    image: string,
}

interface User {
    avatar: string;
    collectionId: string;
    collectionName: string;
    created: string;
    emailVisibility: boolean;
    id: string;
    name: string;
    updated: string;
    username: string;
    verified: boolean;
    expand: any;
}

type AnimeDetails = {
    results: AnimeDetailsProps[];
};

type AnimeDetailsProps = {
    title: string;
    image: string;
    type: string;
    summary: string;
    relased: string;
    genres: string;
    status: string;
    totalepisode: string;
    Othername: string;
}

type GenreList = {
    list: string[];
};

type GenreProps = {
    title: string,
    id: string,
    image: string,
}

type Genre = {
    results: GenreProps[];
};

type RecentProps = {
    title: string,
    id: string,
    image: string,
    episodenumber: string,
}

type Recent = {
    results: RecentProps[];
};

type Episode = {
    links: [],
    link: string,
    totalepisode: string,
}

interface Breadcrumb {
    label: string;
    url: string;
}

interface BreadcrumbsProps {
    items: Breadcrumb[];
}

type Sitemap = Array<{
    url: string;
    lastModified?: string | Date;
}>;

type Robots = {
    rules:
      | {
          userAgent?: string | string[];
          allow?: string | string[];
          disallow?: string | string[];
          crawlDelay?: number;
        }
      | Array<{
          userAgent: string | string[];
          allow?: string | string[];
          disallow?: string | string[];
          crawlDelay?: number;
        }>;
    sitemap?: string | string[];
    host?: string;
  };