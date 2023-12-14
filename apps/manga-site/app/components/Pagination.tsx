function Pagination({ page, setPage }: any) {
    return (
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <div className="btn-group">
                <button className="btn" onClick={() => setPage(page - 1)} disabled={page === 1}>«</button>
                <button className="btn">Page {page}</button>
                <button className="btn" onClick={() => setPage(page + 1)}>»</button>
            </div>
        </div>

    )
}

export default Pagination