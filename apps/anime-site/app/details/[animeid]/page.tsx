import Breadcrumbs from '@/app/components/BreadCrumbs';
import Episode from '@/app/components/Episode';
import getDetails from '@/utils/getDetails';
import getPopular from '@/utils/getPopular';
import Image from 'next/image';
import Link from 'next/link';

// turn this ssr to ssg 
export async function generateStaticParams() {
  const animeList: any = await getPopular(1);

  return animeList.map((anime: PopularAnimeProps) => ({
    postId: anime.id,
  }))

}

export async function generateMetadata({ params }: { params: { animeid: string } }) {
  const { animeid } = params
  const { title }: any = await getDetails(animeid); // deduped

  if (!title) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title,
  }
}

async function page({ params }: { params: { animeid: string } }) {
  const animeid = params.animeid;
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `${animeid}`, url: `/details/${animeid}` },
  ];

  const {
    title,
    image,
    type,
    summary,
    relased,
    genres,
    status,
    totalepisode,
    Othername,

  }: any = await getDetails(animeid);

  // Generate the episode list
  const episodeList = [];
  for (let i = 1; i <= totalepisode; i++) {
    episodeList.push(
      <Episode key={i} animeid={animeid} episodenumber={i} image={image} />
    );
  }


  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image src={image} alt={title} width={200} height={300} className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="mb-4">
            <span className="font-bold">Type:</span> {type}
          </div>
          <div className="mb-4">
            <span className="font-bold">Released:</span> {relased}
          </div>
          <div className="mb-4">
            <span className="font-bold">Genres:</span>
            <Link href={`/genre/${genres}`} className=" ml-2">
              {genres}
            </Link>
          </div>
          <div className="mb-4">
            <span className="font-bold">Status:</span> {status}
          </div>
          <div className="mb-4">
            <span className="font-bold">Other Name:</span> {Othername}
          </div>
          <div className="mb-4">
            <span className="font-bold">Summary:</span> {summary}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {episodeList}
        </div>
      </div>
    </div>
  );
}

export default page;
