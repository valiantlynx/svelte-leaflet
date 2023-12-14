import Image from 'next/image'
import Link from 'next/link'
import Loading from '../recent/loading';

function Card({ child }: { child: any }) {
    //       // Example usage as an image loader
    //   const ImageLoader: any = ({ height, width }: any) => {
    //     return (
    //         <Loading height={height} width={width} />
    //     );
    //   };
    return (
        <Link href={child.episodenumber ? `/details/${child.id}/episode/${child.episodenumber}` : `/details/${child.id}`} aria-label={child.title} className="card ">
            <figure>
                <Image
                    className='h-auto max-w-full rounded-lg'
                    src={child.image}
                    alt={child.title}
                    width={200}
                    height={200}
                />
            </figure>
            <div className=" m-4">
                <h2 className="card-title">{child.title.substring(0, 20) + '...' || 'No Title'}</h2>
                <div className="card-actions justify-end m-2">
                    <button className=" btn-xs btn-primary">Episode: {child.episodenumber}</button>
                </div>
            </div>
        </Link>
    )
}

export default Card