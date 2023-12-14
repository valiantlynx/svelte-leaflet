import Breadcrumbs from '../components/BreadCrumbs'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recent Anime - Animevariant',
  description: 'Watch the latest anime episodes on AnimeVariant, the best website to watch streaming anime for free. Watch now without any ads. ',
}

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: `Recent Anime`, url: `/recent-anime` },
]

export default function RecentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  )
}
