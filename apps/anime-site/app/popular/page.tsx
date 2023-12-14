import PopularAnime from '../components/PopularAnime'

export const metadata = {
  title: "Popular Anime",
}


function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <PopularAnime />
    </main>
  )
}

export default page