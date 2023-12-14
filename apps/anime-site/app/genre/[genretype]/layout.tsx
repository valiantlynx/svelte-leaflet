import Breadcrumbs from '../../components/BreadCrumbs'
import '../../globals.css'

export const metadata = ({ params }: { params: { genretype: string } }) => {
  const { genretype } = params;
  return {
    title: `${genretype} Anime - Page 1`,
  };
};

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
