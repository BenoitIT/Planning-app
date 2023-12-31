import React, { useState } from 'react';
import ImportMailModal from '../models/ImportMailModal';
import CreateLabel from '../models/CreaateLabel';

const DropdownMenu = () => {
    const [isMailModalVisible, setIsMailModalVisible] = useState(false);
    const [isCreateLabelModalVisible, setIsCreateLabelModalVisible] = useState(false);

    const openMailModal = () => {
        setIsMailModalVisible(true);
    };

    const closeMailModal = () => {
        setIsMailModalVisible(false);
    };

    const openCreateLabelModal = () => {
        setIsCreateLabelModalVisible(true);
    };

    const closeCreateLabelModal = () => {
        setIsCreateLabelModalVisible(false);
    };

    return (
        <div className="w-full z-50">
            <div className="min-w-[60.3672px]">
                <ul className="bg-white border rounded-lg shadow-md p-2 space-y-2">
                    <li>
                        <a
                            href="#"
                            className="block py-1 px-3 rounded-lg bg-[#D3F5DA] hover:bg-[#D3F5DA]"
                            onClick={openCreateLabelModal} // Open CreateLabel modal on click
                        >
                            Labelled
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-1 px-3 rounded-lg bg-[#D3F5DA]/30 hover:bg-[#D3F5DA]/40"
                            onClick={openMailModal} // Open ImportMailModal on click
                        >
                            Mail
                        </a>
                    </li>
                </ul>
            </div>
            {isMailModalVisible && (
                <ImportMailModal onClose={closeMailModal} />
            )}
            {isCreateLabelModalVisible && (
                <CreateLabel onClose={closeCreateLabelModal} />
            )}
        </div>
    );
};

export default DropdownMenu;
