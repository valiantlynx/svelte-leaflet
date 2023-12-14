import Breadcrumbs from '../components/BreadCrumbs'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'settings - Animevariant',
}

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: `settings`, url: `/settings` },
]

export default function settingLayout({
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
