import Image from 'next/image'
import Link from 'next/link'

function Carousel({ animeListArray }: any) {
    const carouselItems = animeListArray.map((child: any, index: number) => {
        return (
            <Link
                key={index}
                className="carousel-item"
                href={`/details/${child.id}`}
                aria-label={child.title}
            >
                <Image src={child.image} alt={child.title} width={200} height={200} />
            </Link>
        )
    })

    return (
        <div className="carousel carousel-center rounded-box">
            {carouselItems}
        </div>
    )
}

export default Carousel