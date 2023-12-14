"use client"
import getRecent from "@/utils/getRecent";
import { useState, useEffect } from 'react';
import Grid from "../components/Grid";

function Recent() {
  const [page, setPage] = useState<number>(1);
  const [animeList, setAnimeList] = useState<RecentProps[]>([]);
  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getRecent(page);
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page]);

  return (
    <div className="container mx-auto px-4 bg-base-200">
   
      <h1 className="text-3xl font-bold mt-8 mb-4">Recent Anime - Page {page}</h1>
      <Grid animeListArray={animeList} page={page} setPage={setPage} />
    </div>
  );
}



export default Recent;
