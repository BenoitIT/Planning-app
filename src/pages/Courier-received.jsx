import React, { useState, createContext, useEffect } from 'react';
import Layout from '../layouts/Dashboard';
import Courier_Received from '../components/table/ReceiverList';
import ItemDetails from '../components/table/ItemDetails';
import DropdownMenu from '../components/dropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const navContext = createContext();

const Couriersent = () => {
    const [nav, setNav] = useState(['Recieved'])
    const dataLabels = [
        {
            key: '1',
            Name: 'Transport',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'label'
        },
        {
            key: '1',
            Name: 'Atete',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'label'
        },
        {
            key: '2',
            Name: 'Julian',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'label'
        },
        {
            key: '3',
            Name: 'Transport 43',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'label'
        },

    ];
    
    const dataMail = [
        {
            key: '1',
            Name: 'Mail1',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'mail'
        },
        {
            key: '2',
            Name: 'Mail2',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'mail'
        },
        {
            key: '3',
            Name: 'Mail3',
            Size: '1 courier(s)',
            Date: '9/26/2023, 9:47:24 AM',
            type: 'mail'
        },
    ];

    const [data, setData] = useState(dataLabels)
    const handleNav = (event) => {
        event.preventDefault()
        if (event.currentTarget.innerHTML != 'Recieved') {
            setNav(['Recieved', event.currentTarget.innerHTML])
        } else {
            setNav(['Recieved'])
        }
    }

    useEffect(() => {
        if(nav.length > 1) {
            setData(dataMail)
        } else {
            setData(dataLabels)
        }
    }, [nav])
    // State to manage dropdown menu visibility
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Event handler to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <Layout>
            <div className='p-1 lg:p-4 overflow-y-auto max-w-screen bg-slate-200 h-screen'>
                <div className='flex flex-row gap-3 h-[calc(100vh-80px)]'>
                    <div className="bg-white px-4 py-6 w-[20rem] text-[15px] rounded-md">
                        <h5 className="text-base border-b mb-3">Correspondence</h5>
                        <ul className="flex flex-col gap-2 mb-3 text-primary-900">
                            <div>
                                <Link
                                    aria-current="page"
                                    className="block rounded-lg py-1 px-3 bg-[#D3F5DA]"
                                    to="/dashboard/courier/received"
                                >
                                    Received
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="block rounded-lg py-1 px-3 bg-[#D3F5DA]/30"
                                    to="/dashboard/courier/sent"
                                >
                                    Sent
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className="bg-white p-4 w-full rounded-md ">
                        <div className="flex justify-between items-center">
                            <h3 className=" text-lg">{nav.map((item, idx) => (
                                nav.length>1? nav.length==idx+1? <span className='' onClick={handleNav}>{nav[idx]}</span> : <span className='text-gray '><span className='cursor-pointer hover:underline' onClick={handleNav}>
                                    {`${nav[idx]}`}</span>{` / `}</span> : <span className='' onClick={handleNav}>{nav[idx]}</span>
                            ))}</h3>
                            <Button type="button" className="ant-btn css-19bti2s ant-btn-default ant-dropdown-trigger hover: text - primary" onClick={toggleDropdown}>
                                <span>Add</span>
                            </Button>
                            {isDropdownVisible && (
                                <div className="origin-top-right absolute top-[60px] right-3 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray ring-opacity-5 z-50">
                                    <DropdownMenu />
                                </div>
                            )}
                        </div>
                        <div className="mt-5">
                            <navContext.Provider value={handleNav} >
                                <Courier_Received data={data} />
                            </navContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Couriersent;
