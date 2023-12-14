"use client";
import Breadcrumbs from '@/app/components/BreadCrumbs';
import Chapter from '@/app/components/Chapter';
import getMangaData from '@/utils/pocketbase/getMangaData';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

async function MangaDetails({ params }: { params: { id: string, titleId: string } }) {
  const { id, titleId }: any = params
  const searchParams = useSearchParams();

  const image: any = searchParams.get('img');
  const mangaId: any = searchParams.get('mangaId');
  const mangaTitle: any = searchParams.get('mangaTitle');

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `${titleId}`, url: `/manga/${id}/${titleId}` },
  ];

  const chapterList: any = await getMangaData(id, titleId);
  console.log(chapterList);

  const chapters = chapterList.map((episode: any) => (
    <Chapter
      key={episode.chapterId}
      mangaTitle={mangaTitle}
      chapterId={episode.chapterId}
      image={image}
      mangaId={mangaId}
    />
  ));

  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image src={image} alt={titleId} width={200} height={300} className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{titleId}</h1>
          <div className="mb-4">
            <span className="font-bold">Type:</span> {titleId}
          </div>
          <div className="mb-4">
            <span className="font-bold">Released:</span> {titleId}
          </div>
          <div className="mb-4">
            <span className="font-bold">Genres:</span>
            {titleId}
          </div>
          <div className="mb-4">
            <span className="font-bold">Status:</span> {titleId}
          </div>
          <div className="mb-4">
            <span className="font-bold">Other Name:</span> {titleId}
          </div>
          <div className="mb-4">
            <span className="font-bold">Summary:</span> {titleId}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {chapters}
        </div>
      </div>
    </div>
  );
}

export default MangaDetails
