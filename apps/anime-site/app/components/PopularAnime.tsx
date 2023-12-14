"use client"
import { useState, useEffect } from 'react';
import getPopular from '@/utils/getPopular';
import Grid from './Grid';
import Breadcrumbs from './BreadCrumbs';

export default function PopularAnime() {
    const [animeList, setAnimeList] = useState<PopularAnimeProps[]>([]);
    const [page, setPage] = useState<number>(1);

    const breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: `Popular Anime`, url: `/popular-anime` },
    ];

    

    useEffect(() => {
        async function getAnimeList() {
            const animeList: any = await getPopular(page);
            setAnimeList(animeList);
        }
        getAnimeList();
    }, [page]);


    return (
        <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-3xl font-bold mt-8 mb-4">Popular Anime - Page {page}</h1>
            <Grid animeListArray={animeList} page={page} setPage={setPage} />
        </div>
    );
}
