
import Breadcrumbs from '@/app/components/BreadCrumbs';
import getEpisode from '@/utils/getEpisode';

export async function generateMetadata({ params }: { params: { animeid: string, episode: string } }) {
  const animeid = params.animeid;
  const episode = params.episode;

  return {
    title: `${animeid} Episode ${episode}`,
  }
}


async function page({ params }: { params: { animeid: string, episode: string } }) {
  const animeid = params.animeid;
  const episode = params.episode;

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `${animeid}`, url: `/details/${animeid}` },
    { label: `Episode ${episode}`, url: `/details/${animeid}/episode/${episode}` }
  ];

  const data: any = await getEpisode(animeid, episode);

  console.log("data: ", data);


  return (
    <div>
      <main className="bg-gray-900 min-h-screen">
        <Breadcrumbs items={breadcrumbs} />
        <div className="flex flex-col items-center justify-center h-screen">
          <iframe
            className="w-full h-full"
            src={data.link}
            title={`${animeid} Episode ${episode}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-white mb-4">Episodes: {data.totalepisode}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Render episode thumbnails or links */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
