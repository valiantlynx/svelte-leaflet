"use client"
import Carousel from './components/Carousel'
import PopularAnime from './components/PopularAnime';
import Recent from './recent/page'
import getPopular from '@/utils/getPopular';
import { useState, useEffect } from 'react';

export default async function Home() {
  const [animeList, setAnimeList] = useState<PopularAnimeProps[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getPopular(page);
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Carousel animeListArray={animeList} />
      <PopularAnime />
    </main>
  )
}


