import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useCreateCompanyContactMutation } from "../../redux/api/apiSlice"
import { toast } from 'react-toastify';
const CompanyContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        address: '',
        company: '',
    });

    const [createCompanyContact, { 
        isLoading: isCreatingCompanyContact,
        error: createCompanyContactError,
        isSuccess: isCompanyContactCreated,
        data: createdCompanyContactData,
     }] = useCreateCompanyContactMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: responseData } = await createCompanyContact({
                name: formData.name,
                mail: formData.email,
                phoneNumber: formData.telephone,
                address: formData.address,
                company: formData.company,
            }
            ).unwrap();
            toast.success('Company contact created successfully');
            // You can reset the form if needed
            setFormData({
                name: '',
                email: '',
                telephone: '',
                address: '',
                company: '',
            });
        } catch (error) {
            console.error('Error creating company contact', error);
            toast.error('Error creating company contact');
        }
    };
    useEffect(() => {
        if (isCompanyContactCreated) {
            setFormData({
                name: '',
                email: '',
                telephone: '',
                address: '',
                company: '',
            });
        }

        if (createCompanyContactError) {
            // Handle error if needed
            console.error('Error creating company contact:', createCompanyContactError);
        }

        // Reset the state of the request
        return () => {
            isCompanyContactCreated && false;
            createCompanyContactError && false;
        };
    }
        , [isCompanyContactCreated, createdCompanyContactData]);


    return (
        <div className="ant-modal-body">
            <h1 className="text-xl font-semibold text-primary mb-4">Add a company contact</h1>
            <form>
                <div className="flex flex-col lg:flex-row gap-2">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="names">Name</label>
                        <input type="text" name="name" className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                            onChange={handleChange} value={formData.name}
                        />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="names">Mail</label>
                        <input type="email" name="email" className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                            onChange={handleChange} value={formData.email}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="names">Phone number</label>
                        <input type="tel" name="telephone" className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                            onChange={handleChange} value={formData.telephone}
                        />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="names">Address</label>
                        <input type="text" name="address" className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                            onChange={handleChange} value={formData.address}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start w-full">
                    <label htmlFor="names">Company</label>
                    <input type="text" name="company" className="p-2 bg-slate-100 rounded outline-primary-800 mb-2 w-full"
                        onChange={handleChange} value={formData.company}
                    />
                </div>
                <div className="flex justify-end gap-1">
                    <Button type="button" className="ant-btn css-19bti2s ant-btn-default">
                        <span>Quit</span>
                    </Button>
                    <Button className="bg-primary rounded shadow-sm px-5 text-white" type="submit"
                        onClick={handleSubmit}
                    >
                        {isCreatingCompanyContact ? 'Saving...' : 'Save'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CompanyContactForm;
