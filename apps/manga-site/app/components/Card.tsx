import Image from 'next/image'
import Link from 'next/link'

function Card({ child }: { child: any }) {
    return (
        <Link
            href={{
                pathname: `/manga/${child.id}/${child.titleId}`,
                query: { 
                    img: child.img,
                    mangaId: child.id,
                    mangaTitle: child.titleId,
                 },
            }}
            aria-label={child.title}
            className="card"
        >
            <figure>
                <Image
                    className='h-auto max-w-full rounded-lg'
                    src={child.img}
                    alt={child.title}
                    width={200}
                    height={200}
                />
            </figure>
            <div className=" m-4">
                <h2 className="card-title">{child.title.substring(0, 20) + '...' || 'No Title'}</h2>
                <div className="card-actions justify-end m-2">
                    <button className=" btn-xs btn-primary">{child.latestChapter}</button>
                </div>
            </div>
        </Link>
    )
}

export default Card