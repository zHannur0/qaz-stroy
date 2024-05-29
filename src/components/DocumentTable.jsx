import React, {useState} from 'react';
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";

const documents = [[
    { date: '03/26/2024', status: 'Ожидает подписания', text: 'ABP', number: 'TR-487/5', organizer: 'Murray\'s Discount Auto Stores' },
    { date: '02/18/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Magna Architectural Design' },
    { date: '03/10/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Pro Property Maintenance' },
    { date: '04/14/2024', status: 'Подписано', text: 'ABP', number: 'TR-487/5', organizer: 'Johnson\'s General Stores' },
    { date: '02/23/2024', status: 'В работе', text: 'ABP', number: 'TR-487/5', organizer: 'Total Network Development' },
    ],
    [
        { date: '03/26/2024', status: 'Ожидает подписания', text: 'ABP', number: 'TR-487/5', organizer: 'Sunset Valley Foods' },
        { date: '02/18/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Mountain Peak Enterprises' },
        { date: '03/10/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Ocean Breeze Resorts' },
        { date: '04/14/2024', status: 'Подписано', text: 'ABP', number: 'TR-487/5', organizer: 'Forest Hill Farms' },
        { date: '02/23/2024', status: 'В работе', text: 'ABP', number: 'TR-487/5', organizer: 'Riverbend Holdings' },
    ],
    [
        { date: '03/26/2024', status: 'Ожидает подписания', text: 'ABP', number: 'TR-487/5', organizer: 'Tech Innovators Inc.' },
        { date: '02/18/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Healthcare Solutions Ltd.' },
        { date: '03/10/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Education Unlimited' },
        { date: '04/14/2024', status: 'Подписано', text: 'ABP', number: 'TR-487/5', organizer: 'Energy Savers LLC' },
        { date: '02/23/2024', status: 'В работе', text: 'ABP', number: 'TR-487/5', organizer: 'Fashion Forward Retail' },
    ],
    [
        { date: '03/26/2024', status: 'Ожидает подписания', text: 'ABP', number: 'TR-487/5', organizer: 'Digital Dynamics Corp.' },
        { date: '02/18/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Urban Developers Ltd.' },
        { date: '03/10/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Prime Property Management' },
        { date: '04/14/2024', status: 'Подписано', text: 'ABP', number: 'TR-487/5', organizer: 'Global Trading Co.' },
        { date: '02/23/2024', status: 'В работе', text: 'ABP', number: 'TR-487/5', organizer: 'Skyline Construction' },
    ],
    [
        { date: '03/26/2024', status: 'Ожидает подписания', text: 'ABP', number: 'TR-487/5', organizer: 'Bright Future Technologies' },
        { date: '02/18/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'Northern Star Architects' },
        { date: '03/10/2024', status: 'Подписано Заказчиком', text: 'ABP', number: 'TR-487/5', organizer: 'East Coast Services' },
        { date: '04/14/2024', status: 'Подписано', text: 'ABP', number: 'TR-487/5', organizer: 'Southwest Supplies Inc.' },
        { date: '02/23/2024', status: 'В работе', text: 'ABP', number: 'TR-487/5', organizer: 'West End Distribution' },
    ]];

const DocumentTable = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [companyFilter,setCompanyFilter ] = useState("");
    const [changeCompany, setChangeCompany] = useState("")
    const handleChangeFilter = (value) => {
        setChangeCompany(value);
    }

    const handleFilter = () => {
        setCompanyFilter(changeCompany);
    }

    return (
        <div className={"flex flex-col gap-[20px] px-[20px]"}>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Введите название организации"
                    className="px-4 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) => handleChangeFilter(e.target.value)}
                />
                <button className="bg-[#00A0E3] text-white px-[20px] py-1 rounded-md hover:bg-blue-500" onClick={handleFilter}>
                    Найти
                </button>
            </div>
            <Table documents={documents[currentPage]} companyFilter={companyFilter} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={documents.length} />
        </div>

    )
        ;
};

export default DocumentTable;
