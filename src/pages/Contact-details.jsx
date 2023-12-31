import React, { useState } from 'react';
import Layout from '../layouts/Dashboard';
import { Button, Modal } from 'antd'; // Import Modal from Ant Design
import ContactInfo from '../components/table/Contact-information';
import CompanyContactForm from "../components/models/CompanyContactForm"
const ContactInformation = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <Layout>
            <div className="bg-slate-200 p-6">
                <div className="m-2 md:m-5 p-2 pt-4 md:p-10 min-h-[78vh] bg-white rounded-2xl relative">
                    <div className="mb-5 flex justify-between items-start lg:items-center">
                        <p className="md:text-2xl text-1xl font-bold tracking-tight to-slate-900 p-2">Contact information</p>
                        <Button
                            className="bg-primary hover:bg-primary-900 duration-700 text-white p-2 md:px20 px-8 rounded"
                            onClick={showModal} // Open the form when the "Add" button is clicked
                        >
                            Add
                        </Button>
                    </div>
                    <ContactInfo />
                </div>
            </div>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <CompanyContactForm />
            </Modal>
        </Layout>

    );
};

export default ContactInformation;

