
import Breadcrumbs from '@/app/components/BreadCrumbs';
import getEpisode from '@/utils/getEpisode';
import Image from 'next/image';

async function page({ params }: { params: { id: string, titleId: string, chapterid: string } }) {

  const { id, titleId, chapterid } = params

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `${titleId}`, url: `/manga/${id}/${titleId}` },
    { label: `Chapter ${chapterid}`, url: `/manga/${id}/${titleId}/chapter/${chapterid}` }
  ];

  const data: any = await getEpisode(id, titleId, chapterid);
  return (
    <div>
      <main className="flex-grow bg-gray-900">
        <Breadcrumbs items={breadcrumbs} />
        <div className="flex flex-col items-center justify-center h-full w-full md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto ">
          {data.map((page: any) => (
            <Image
              key={page.pageNumber}
              src={page.imageUrl}
              alt={`${titleId} Chapter ${chapterid} Page ${page.id}`}
              className='w-full'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
              width={4/5}
              height={5/5}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default page;
