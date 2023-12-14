import Image from 'next/image'
import Link from 'next/link'

function Carousel({ mangaListArray }: any) {
    console.log("mangaListArray: ", mangaListArray);
    const carouselItems = mangaListArray.map((child: any, index: number) => {

        return (
            <Link
                key={index}
                className="carousel-item"
                aria-label={child.title}
                href={{
                    pathname: `/manga/${child.id}/${child.titleId}`,
                    query: {
                        img: child.img,
                        mangaId: child.id,
                        mangaTitle: child.titleId,
                    },
                }}
            >
                <Image src={child.img} alt={child.title} width={200} height={200} />
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