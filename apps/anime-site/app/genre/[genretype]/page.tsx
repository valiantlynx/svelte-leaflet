"use client"
import getGenre from "@/utils/getGenre";
import { useState, useEffect } from 'react';
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Grid from "@/app/components/Grid";

async function Genre({ params }: { params: { genretype: string } }) {
  const [page, setPage] = useState<number>(1);
  const [animeList, setAnimeList] = useState<GenreProps[]>([]);
  const genretype = params.genretype;

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `Genre List`, url: `/genre-list` },
    { label: `${genretype}`, url: `/genre/${genretype}` },
  ];

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getGenre(genretype, page);
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page, genretype]);


  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mt-8 mb-4">{genretype} Anime - Page {page}</h1>
      <Grid animeListArray={animeList} page={page} setPage={setPage} />
    </div>
  );
}

export default Genre;
