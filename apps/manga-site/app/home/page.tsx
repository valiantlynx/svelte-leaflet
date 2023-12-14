
import Carousel from '@/app/components/Carousel'
import getHomeData from '@/utils/pocketbase/getHomeData';

async function page() {
 const page = 1;
  const mangaList: any = await getHomeData(page);

  console.log("mangaList", mangaList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      {mangaList}
    </main>
  )
}

export default page