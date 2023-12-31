import React, { useEffect, useState } from 'react';
import { TimePicker, Button, Select } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useLazyGetSingleStaffMemberQuery, useCreateTimeTableMutation } from '../../redux/api/apiSlice';
import { toast } from 'react-toastify';
function StaffDetailsModal({ staff, staffId }) {
    dayjs.extend(customParseFormat);
    const [formData, setFormData] = useState({
        day: '',
        fromTime: null,
        toTime: null,
    });
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const [data, setData] = useState([]);
    const [getSingleStaffMember, {
        data: gotSingleStaffMemberData,
        isLoading: isGettingSingleStaffMember,
        error: getSingleStaffMemberError,
        isSuccess: isSingleStaffMemberGot,
    }] = useLazyGetSingleStaffMemberQuery();

    useEffect(() => {
        if (staffId) {
            getSingleStaffMember({ id: staffId });
        }
    }, [staffId, getSingleStaffMember]);
    useEffect(() => {
        if (isSingleStaffMemberGot && gotSingleStaffMemberData) {
            setData(gotSingleStaffMemberData);
        }
        if (getSingleStaffMemberError) {
            console.error('Error getting single staff member:', getSingleStaffMemberError);
        }
    }, [isSingleStaffMemberGot, gotSingleStaffMemberData, getSingleStaffMemberError]);

    const [createTimeTable, {
        isLoading: isCreatingTimeTable,
        error: createTimeTableError,
        isSuccess: isTimeTableCreated,
        data: createdTimeTableData,
    }] = useCreateTimeTableMutation();

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleTimePickerChange = (name, time) => {
        // Handle TimePicker change separately
        setFormData({
            ...formData,
            [name]: time,
        });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: responseData } = await createTimeTable({
                day: formData.day,
                fromTime: formData.fromTime.format('HH:mm:ss'),
                toTime: formData.toTime.format('HH:mm:ss'),
                staffId,
            });
            // You may want to reset the form after successful submission
            setFormData({
                day: '',
                fromTime: null,
                toTime: null,
            });
        } catch (error) {
            console.error('Error creating time table:', createTimeTableError);
        }
    };
    useEffect(() => {
        if (isTimeTableCreated) {
            // Handle successful response if needed
            toast.success('Time table created successfully');
            // You may want to reset the form after successful submission
            setFormData({
                day: '',
                fromTime: null,
                toTime: null,
            });
        }
        if (createTimeTableError) {
            // Handle error if needed
            console.error('Error creating time table:', createTimeTableError);
            // display error message but exact error
            toast.error(
                createTimeTableError.data?.message ?? 'Could not create time table'
            );
        }
    }, [isTimeTableCreated, createdTimeTableData, createTimeTableError]);
    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <>
            <div className="ant-modal-body">
                <div className="flex flex-col md gap-2 justify-between max-h-[70vh] overflow-auto p-1">
                    <div className="shadow rounded-lg p-3">
                        <h4 className="text-md md:text-md font-semibold mb-3">Details du personnel</h4>
                        <div className="flex flex-col lg:flex-row justify-between pb-2">
                            <div className="w-full lg:w-1/2">
                                <span>Noms</span>
                                <p className="font-semibold text-primary-800">{data?.name}</p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <span>Email</span>
                                <p className="font-semibold text-primary-800">{data?.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between pb-2">
                            <div className="w-full lg:w-1/2">
                                <span>Tel</span>
                                <p className="font-semibold text-primary-800">{data?.phone}</p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <span>Adress</span>
                                <p className="font-semibold text-primary-800">{data?.address}</p>
                            </div>
                        </div>
                    </div>
                    <form className="w-full shadow bg-primary-100 rounded-lg p-3">
                        <h4 className="text-md md:text-md font-semibold mb-3">Add a schedule</h4>
                        <div className="flex flex-col items-start w-full">
                            <label className="text-gray-700" htmlFor="day">
                                day
                            </label>
                            <div className="flex flex-col items-start w-full">

                                <Select
                                    className='
                                    w-full
                                    '
                                    showSearch
                                    placeholder="Select a jour"
                                    optionFilterProp="children"
                                    onChange={(value) => handleInputChange('day', value)}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={[
                                        {
                                            value: 'Monday',
                                            label: 'Monday',
                                        },

                                        {
                                            value: 'Tuesday',
                                            label: 'Tuesday',
                                        },

                                        {
                                            value: 'Wednesday',
                                            label: 'Wednesday',
                                        },

                                        {
                                            value: 'Thursday',
                                            label: 'Thursday',
                                        },

                                        {
                                            value: 'Friday',
                                            label: 'Friday',
                                        },

                                        {
                                            value: 'Saturday',
                                            label: 'Saturday',
                                        },

                                        {
                                            value: 'Sunday',
                                            label: 'Sunday',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label className="text-gray-700" htmlFor="date">
                                from - to
                            </label>
                            <div className="flex w-full gap-2">
                                <TimePicker className='w-full' defaultValue={dayjs('13:30:56', 'HH:mm:ss')}
                                    placeholder="Heure du début"
                                    name='fromTime'
                                    onChange={(time) => handleTimePickerChange('fromTime', time)}

                                />
                                <TimePicker className='w-full' defaultValue={dayjs('13:30:56', 'HH:mm:ss')}
                                    placeholder="Heure de fin"
                                    name='toTime'
                                    onChange={(time) => handleTimePickerChange('toTime', time)}
                                />
                            </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary-900 duration-700 text-white mt-2 p-2 px-6 my-2 rounded w-full" type="submit"
                            onClick={handleFormSubmit}
                        >
                            {isCreatingTimeTable ? 'Adding...' : 'Add'}
                        </Button>
                    </form>
                </div>
            </div>
            <div className="ant-modal-footer">
                <Button type="button" className="ant-btn bg-red-500 text-white">
                    <span>Supprimer</span>
                </Button>
                <Button type="button" className="ant-btn css-19bti2s ant-btn-default"
                >
                    <span>Quitter</span>
                </Button>
            </div>
        </>
    );
}

export default StaffDetailsModal;
