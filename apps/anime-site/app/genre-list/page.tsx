"use client"
import getGenreList from "@/utils/getGenreList";
import Link from "next/link";
import { useState, useEffect } from 'react';

async function GenreList() {
  const [genreList, setGenreList] = useState<GenreList[]>([]);

  useEffect(() => {
    async function getList() {
      const genreList: any = await getGenreList();
      setGenreList(genreList);
    }
    getList();
  }, []);

  if (!genreList) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold mb-8">Genre List</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {genreList.map((genre: any) => {
          // replace spaces with dashes
          const genreNoSpace = genre.replace(/\s+/g, '-').toLowerCase(); 
          return (
            <div
              key={genre}
              className="p-4 bg-base-100 shadow rounded-lg hover:shadow-lg transition-shadow dark:bg-gray-200"
            >
              <Link
                href={`/genre/${genreNoSpace}`} className="text-lg font-semibold">{genre}</Link>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

export default GenreList;




