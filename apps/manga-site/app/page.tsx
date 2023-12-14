"use client"
import PopularManga from '@/app/components/PopularManga';
import Carousel from '@/app/components/Carousel'
import getPopular from '@/utils/getPopular';
import { useState, useEffect } from 'react';

export const metadata = {
  title: "Welcome to AnimeVariant",
}

function page() {

  const [mangaList, setMangaList] = useState<PopularMangaProps[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getMangaList() {
      const mangaList: any = await getPopular(page);
      setMangaList(mangaList);
    }
    getMangaList();
  }, [page]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Carousel mangaListArray={mangaList} />
      <PopularManga />
    </main>
  )
}

export default page