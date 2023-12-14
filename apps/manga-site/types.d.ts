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

type PopularManga = {
    mangas: PopularMangaProps[];
};

type PopularMangaProps = {
    title: string
    img: string
    tags: string
    latestChapter: string
    src: string
    id: string
    titleId: string
    description: string
    author: string[]
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

type MangaDetails = {
    episodes: MangaDetailsProps[];
};

type MangaDetailsProps = {
    src: string,
    chapterId: string
    chapterTitle: string,
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

type ChapterProps = {
    imageUrl: string,
    pageNumber: number,
    totalPages: number,
    chapterText: string,
}

type Chapter = {
    images: ChapterProps[]
}

type MangaPocketbase = {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    items: Item[],
}

type MangaItem = {
    id: string,
    collectionId: string,
    collectionName: string,
    created: Date,
    updated: Date,
    title: string,
    img: string,
    tags: string,
    latestChapter: string,
    src: string,
    description: string,
    author: string,
    expand: any;
    imageCid: string,
    isPinned: boolean,
    titleId: string,
}
