import Breadcrumbs from '../../components/BreadCrumbs'
import '../../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile - Animevariant',
}

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: `Profile`, url: `/profile` },
]

export default function ProfileLayout({
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
