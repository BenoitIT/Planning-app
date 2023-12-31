import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { useLazyGetCompanyContactQuery } from "../../redux/api/apiSlice"
const columns = [
    // Define your table columns here
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',

    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
];

const ContactInfo = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]); 
    const [filteredData, setFilteredData] = useState(data);   
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
    const [getCompanyContact, { data: companyContactData, error: companyContactError, isLoading: isCompanyContactLoading }] = useLazyGetCompanyContactQuery();
   
    const handleGetCompanyContact = async () => {
        try {
            const { data: responseData } = await getCompanyContact().unwrap();
            setData(responseData);
            setFilteredData(responseData);
        } catch (error) {
            console.error('Error getting company contact', error);
        }
    }
    useEffect(() => {
        handleGetCompanyContact();
    }, []);
    const mapedData = companyContactData?.map((item) => {
        return {
            key: item.id,
            name: item.name,
            email: item.mail,
            phone: item.phoneNumber,
            address: item.address,
            company: item.company,
        }
    }
    );
    return (
        <div>
            <div className="flex justify-between mb-1">
                <div className="flex gap-2">
                    <div className="e-toolbar-item" aria-disabled="false" title="Supprimer">
                        <Button
                            className="e-tbar-btn e-tbtn-txt e-control e-btn e-lib"
                            type="button"
                            id="grid_2131562407_0_delete"
                            tabIndex="-1"
                            aria-label="Supprimer"
                            style={{ width: 'auto' }}
                        >
                            <span className="e-btn-icon e-delete e-icons e-icon-left"></span>
                            <span className="e-tbar-btn-text">Supprimer</span>
                        </Button>
                    </div>
                    <div className="e-toolbar-item" aria-disabled="false" title="Impression">
                        <Button
                            className="e-tbar-btn e-tbtn-txt e-control e-btn e-lib"
                            type="button"
                            id="grid_2131562407_0_print"
                            tabIndex="-1"
                            aria-label="Impression"
                            style={{ width: 'auto' }}
                        >
                            <span className="e-btn-icon e-print e-icons e-icon-left"></span>
                            <span className="e-tbar-btn-text">Impression</span>
                        </Button>
                    </div>
                </div>
                <div className="e-toolbar-center" style={{ marginLeft: '307px' }}></div>
                <div className="e-toolbar-right">
                    <div className="e-toolbar-item e-search-wrapper" aria-disabled="false" title="Chercher">
                        <div className="e-input-group e-search" role="search">
                            <input
                                id="grid_2131562407_0_searchbar"
                                className="e-input"
                                name="input"
                                type="search"
                                placeholder="Chercher"
                                value={searchText}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <span
                                id="grid_2131562407_0_searchbutton"
                                className="e-input-group-icon e-search-icon e-icons"
                                tabIndex="-1"
                                title="Chercher"
                                aria-label="search"
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
            <Table columns={columns} dataSource={mapedData} bordered pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }} />
        </div>
    );
}

export default ContactInfo;
