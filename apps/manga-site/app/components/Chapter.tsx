import Image from 'next/image';
import Link from 'next/link';

function Chapter({ mangaId, mangaTitle, chapterId, image }: { mangaTitle: string, mangaId: string, chapterId: number, image: string }) {
    return (
        <div  className="w-full md:w-10/12 lg:w-10/12 xl:w-10/12 p-4">
            <div className="relative">
                <div className="h-48">
                    <Image
                        src={image}
                        alt={`Episode ${chapterId} Thumbnail`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                    <Link href={`/manga/${mangaId}/${mangaTitle}/chapter/${chapterId}`}>
                        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-lg font-bold rounded-full w-12 h-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <h3 className="text-lg font-bold mt-2">{chapterId}</h3>
        </div>
    )
}

export default Chapter