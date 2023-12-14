"use client"
import Carousel from '@/app/components/Carousel'
import getHomeData from '@/utils/pocketbase/getHomeData';
import Grid from '../components/Grid';

export const metadata = {
  title: "Welcome to AnimeVariant",
}

async function page() {
  const pocketbaseMangaList: any = await getHomeData(1);
  const page = 1;

  async function setPage(page: number) {
    getHomeData(page);
  }

  console.log("current page: ", page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Carousel mangaListArray={pocketbaseMangaList} />
      <Grid mangaListArray={pocketbaseMangaList} page={page} setPage={setPage} />
    </main>
  )
}

export default page