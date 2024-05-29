
const Table = ({ documents, companyFilter }) => {
    return (
        <div className="flex flex-col gap-[10px]">
            <h1 className="text-2xl font-medium">Все документы</h1>
            <table className="min-w-full bg-white border">
                <thead>
                <tr className="bg-[#00A0E3] text-white text-xs">
                    <th className="py-1 px-2 border">№</th>
                    <th className="py-1 px-2 border">Дата</th>
                    <th className="py-1 px-2 border">Статус</th>
                    <th className="py-1 px-2 border">Тип</th>
                    <th className="py-1 px-2 border">Номер</th>
                    <th className="py-1 px-2 border">Организация</th>
                    <th className="py-1 px-2 border"></th>
                    <th className="py-1 px-2 border"></th>
                </tr>
                </thead>
                <tbody>
                {documents
                    .filter((item) => {
                        if (!companyFilter) {
                            return true;
                        }
                        return item.organizer.toLowerCase().includes(companyFilter.toLowerCase());
                    })
                    .map((doc, index) => (
                        <tr key={index} className="text-center text-xs">
                            <td className="py-1 px-2 border">{index + 1}</td>
                            <td className="py-1 px-2 border">{doc.date}</td>
                            <td className="py-1 px-2 border">{doc.status}</td>
                            <td className="py-1 px-2 border">{doc.text}</td>
                            <td className="py-1 px-2 border">{doc.number}</td>
                            <td className="py-1 px-2 border">{doc.organizer}</td>
                            <td className="py-1 px-2 border"></td>
                            <td className="py-1 px-2 border"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
