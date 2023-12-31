import React, { useEffect, useState } from 'react';
import { Button, Table, Modal } from 'antd';
import StaffDetailsModal from '../models/StaffDetails';
import { useCreateStaffMemberMutation, useLazyGetStaffMemberQuery } from '../../redux/api/apiSlice';
import { toast } from 'react-toastify';
import Loading from '../../components/inputs/Loading';
const Staff = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button className="bg-primary hover:bg-primary duration-500 text-white rounded-full p-2"
                    onClick={() => handleEdit(record)}

                ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></Button>
            ),
        },
    ];
    const [getStaffMember, {
        data: gotStaffMemberData,
        isLoading: isGettingStaffMember,
        error: getStaffMemberError,
        isSuccess: isStaffMemberGot,
    }] = useLazyGetStaffMemberQuery();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [data, setData] = useState([]);
    const [createStaffMember,
        {
            isLoading: isCreatingStaffMember,
            error: createStaffMemberError,
            isSuccess: isStaffMemberCreated,
            data: createdStaffMemberData,
        }] = useCreateStaffMemberMutation()
    useEffect(() => {
        getStaffMember();
    }, [getStaffMember]);
    useEffect(() => {
        if (isStaffMemberGot) {
            setData(gotStaffMemberData);
        }
        if (getStaffMemberError) {
            console.error('Error getting staff member:', getStaffMemberError);
        }
    }, [isStaffMemberGot, getStaffMemberError]);
    const handleEdit = (record) => {
        setSelectedStaff(record);
        showModal();
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data: responseData } = await createStaffMember({
                name: formData.name,
                email: formData.email,
                address: formData.address,
                phone: formData.phone,
            }).unwrap();

            setFormData({
                name: '',
                email: '',
                address: '',
                phone: '',
            });
            // reload the window to get the new data
            window.location.reload();
        } catch (error) {
            console.error('Error creating staff member:', createStaffMemberError);
        }
    };
    useEffect(() => {
        if (isStaffMemberCreated) {
            // You can reset the form if needed
            toast.success('Staff member created successfully');
            setFormData({
                name: '',
                email: '',
                address: '',
                phone: '',
            });
        }
        if (createStaffMemberError) {
            // Handle error if needed
            toast.error('Could not create staff member');
            console.error('Error creating staff member:', createStaffMemberError);

        }
        // Reset the state of the request
        return () => {
            isStaffMemberCreated && false;
            createStaffMemberError && false;
        };
    }
        , [isStaffMemberCreated, createStaffMemberError]
    );
    return (
        <div className="flex flex-col md:flex-row-reverse gap-4 w-full">
            <form className="w-full md:w-1/4 shadow rounded-lg p-3 h-full" >
                <h1 className="text-md md:text-xl font-medium mb-3">Add Staff</h1>
                <div className="flex flex-col items-start w-full">
                    <label className="text-gray-700" htmlFor="names">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={formData.name}
                        className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"


                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-gray-700" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={handleInputChange}
                        value={formData.address}
                        className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-gray-700" htmlFor="tel">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={handleInputChange}
                        value={formData.phone}
                        className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                    />
                </div>
                <Button className="bg-primary hover-bg-primary-900 duration-700 text-white mt-2 p-2 px-6 my-2 rounded w-full" type="submit"
                    onClick={handleSubmit}
                >
                    {isCreatingStaffMember ? 'Adding...' : 'Add'}
                </Button>
            </form>
            <div className="w-full md:w-3/4">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={
                        {
                            position: ['bottomCenter'],
                            pageSize: 4,
                            defaultCurrent: 1,
                            showSizeChanger: false,
                        }
                    }

                    className='shadow rounded-lg'
                />
            </div>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}

            >
                {selectedStaff && (
                    <StaffDetailsModal staff={selectedStaff} staffId={selectedStaff.id} />
                )}
            </Modal>
        </div>
    );
};
export default Staff