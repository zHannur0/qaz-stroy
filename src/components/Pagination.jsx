
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <footer className="absolute bottom-1 flex justify-between items-center text-lg">
            <div className="flex gap-1">
                <button className="px-2 py-1" onClick={() => setCurrentPage(0)}>{"|<"}</button>
                <button className="px-2 py-1" onClick={() => {
                    if (currentPage !== 0) setCurrentPage(currentPage - 1);
                }}>{"<"}</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`h-[48px] w-[48px] rounded ${currentPage === index ? "bg-[#00426912]" : ""}`}
                        onClick={() => setCurrentPage(index)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button className="px-2 py-1" onClick={() => {
                    if (currentPage !== totalPages - 1) setCurrentPage(currentPage + 1);
                }}>{">"}</button>
                <button className="px-2 py-1" onClick={() => setCurrentPage(totalPages - 1)}>{">|"}</button>
            </div>
        </footer>
    );
};

export default Pagination;
