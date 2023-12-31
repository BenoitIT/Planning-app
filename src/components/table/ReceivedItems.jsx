// ReceivedItems.js
import React from 'react';
import { Table, Button } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <a onClick={() => record.onItemClick(record.name)}>{text}</a>
        ),
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, record) => (
            <Button type="danger" onClick={() => record.onDeleteClick(record.key)}>
                Delete
            </Button>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'Item 1',
        size: '5MB',
        date: '2023-10-03',
        onItemClick: (itemName) => {
            console.log(`Clicked on item: ${itemName}`);
            // Add navigation logic here
        },
        onDeleteClick: (key) => {
            console.log(`Deleted item with key: ${key}`);
            // Add delete logic here
        },
    },
    {
        key: '2',
        name: 'Item 2',
        size: '3MB',
        date: '2023-10-04',
        onItemClick: (itemName) => {
            console.log(`Clicked on item: ${itemName}`);
            // Add navigation logic here
        },
        onDeleteClick: (key) => {
            console.log(`Deleted item with key: ${key}`);
            // Add delete logic here
        },
    },
    // Add more received items here
];

const ReceivedItems = () => {
    return <Table columns={columns} dataSource={data} pagination={false} bordered />;
};

export default ReceivedItems;
