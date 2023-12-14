export default function Loading({ width, height }: any) {

    return (
        <div className={`flex animate-pulse w-${width} h-${height}`}>

            <span className="w-full h-screen bg-gray-200 dark:bg-gray-700 block">
                <h1 className="text-center text-4xl font-bold text-gray-500 dark:text-gray-300">
                    loading ...
                </h1>
            </span>
        </div>
    )
}