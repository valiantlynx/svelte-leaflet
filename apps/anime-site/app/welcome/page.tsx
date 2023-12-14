import Welcome from '@/app/components/Welcome'

export const metadata = {
  title: "Welcome to AnimeVariant",
}

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Welcome />
    </main>
  )
}

export default page