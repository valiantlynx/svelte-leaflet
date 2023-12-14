import React from 'react'
import Card from './Card'
import Pagination from "../components/Pagination";


function Grid({ mangaListArray, page, setPage }: any) {
    // map through children and render each child as a card
    const gridItems = mangaListArray.map((child: any, index: number) => {
        return (
            <Card key={index} child={child} />
        )
    })

    return (
        <>
            <Pagination page={page} setPage={setPage} className=" hover" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:grid-cols-6">
                {gridItems}
            </div>
            <Pagination page={page} setPage={setPage} className=" hover" />
        </>

    )
}

export default Grid