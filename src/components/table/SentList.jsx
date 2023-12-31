import React, { useContext } from 'react';
import { Button, Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { navContext } from '../../pages/Courier_sent';
const { Column } = Table;

const Courier_Sent = ({ data }) => {
    const handleNav = useContext(navContext)
    return (
        <Table dataSource={data} pagination={false} bordered>
            <Column
                title="Name"
                dataIndex="Name"
                key="Name"
                render={(text, record) => (
                    <div key={record.key} className='flex items-center gap-2 text-primary-900 hover:text-primary-900'>
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                        {record.type == 'label' ? <span className='cursor-pointer' onClick={handleNav}>{text}</span> : <span className='cursor-pointer'>{text}</span>}
                    </div>
                )}
            />
            <Column title="Size" dataIndex="Size" key="Size" />
            <Column title="Date" dataIndex="Date" key="Date" />
            <Column
                title="Actions"
                key="Actions"
                render={(text, record) => (
                    <Button
                        type="button"
                        className="ant-btn css-19bti2s ant-btn-default ant-dropdown-trigger hover: text - primary"
                        onClick={() => handleActionClick(record)}
                    >
                        More
                    </Button>
                )}
            />
        </Table>
    );
};

export default Courier_Sent;