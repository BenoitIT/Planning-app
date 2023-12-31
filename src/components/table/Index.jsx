import React, { useState } from 'react';
import { Table } from 'antd';
import Search from 'antd/es/input/Search';
import { Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
const { Column } = Table;
const data = [
    {
        key: '1',
        Noms: 'John',
        Lundi: '08:00 - 16:16',
        Mardi: '08:00 - 16:16',
        Mercredi: '08:00 - 16:16',
        Jeudi: '08:00 - 16:16',
        Vendredi: '08:00 - 16:16',
        Samedi: '08:00 - 16:16',
        Dimanche: '08:00 - 16:16',
    },
    {
        key: '2',
        Noms: 'Jim',
        Lundi: '08:00 - 16:16',
        Mardi: '08:00 - 16:16',
        Mercredi: '08:00 - 16:16',
        Jeudi: '08:00 - 16:16',
        Vendredi: '08:00 - 16:16',
        Samedi: '08:00 - 16:16',
        Dimanche: '08:00 - 16:16',
    },
    {
        key: '3',
        Noms: 'Joe',
        Lundi: '08:00 - 16:16',
        Mardi: '08:00 - 16:16',
        Mercredi: '08:00 - 16:16',
        Jeudi: '08:00 - 16:16',
        Vendredi: '08:00 - 16:16',
        Samedi: '08:00 - 16:16',
        Dimanche: '08:00 - 16:16',
    },
];
const App = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const { t } = useTranslation('dashboard')
    // Function to update the filteredData based on search text
    const handleSearch = (text) => {
        const filtered = data.filter((item) =>
            Object.values(item).some((value) =>
                value.toLowerCase().includes(text.toLowerCase())
            )
        );
        setFilteredData(filtered);
        setSearchText(text);
    };

    return (
        <>
            <div className="flex justify-end mb-4">
                <Search
                    placeholder="Search..."
                    style={{ width: 200 }}
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <Table dataSource={filteredData} pagination={false} bordered>
                <Column title={`${t('body.Horaire personnel.name')}`} dataIndex="Noms" key="Noms" />
                <Column title={`${t('body.Horaire personnel.monday')}`} dataIndex="Lundi" key="Lundi" />
                <Column title={`${t('body.Horaire personnel.tuesday')}`} dataIndex="Mardi" key="Mardi" />
                <Column title={`${t('body.Horaire personnel.wednesday')}`} dataIndex="Mercredi" key="Mercredi" />
                <Column title={`${t('body.Horaire personnel.thursday')}`} dataIndex="Jeudi" key="Jeudi" />
                <Column title={`${t('body.Horaire personnel.friday')}`} dataIndex="Vendredi" key="Vendredi" />
                <Column title={`${t('body.Horaire personnel.saturday')}`} dataIndex="Samedi" key="Samedi" />
                <Column title={`${t('body.Horaire personnel.sunday')}`} dataIndex="Dimanche" key="Dimanche" />
            </Table>
            <Pagination
                total={filteredData.length}
                showTotal={(total) => `Total ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
            />
            <br />
        </>
    );
};

export default App;