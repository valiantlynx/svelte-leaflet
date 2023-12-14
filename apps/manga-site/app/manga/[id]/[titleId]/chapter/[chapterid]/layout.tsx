import '@/app/globals.css'

export async function generateMetadata({ params }: { params: { id: string, titleId: string, chapterid: string } }) {
    const { id, titleId, chapterid } = params
    return {
        title: `${titleId} Chapter ${chapterid}`,
    }
}


export default function RecentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}