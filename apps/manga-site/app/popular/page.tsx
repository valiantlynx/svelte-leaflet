import PopularManga from '../components/PopularManga'

export const metadata = {
  title: "Popular Manga",
}


function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <PopularManga />
    </main>
  )
}

export default page