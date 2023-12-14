import Breadcrumbs from '../components/BreadCrumbs'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genre List - Animevariant',
  description: 'List of anime genres on Animevariant. Find your favorite anime genres here!',
}

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: `Genre List`, url: `/genre-list` },
];

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
