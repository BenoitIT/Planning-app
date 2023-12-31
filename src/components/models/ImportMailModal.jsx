import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React from 'react';

const ImportMailModal = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px]" >
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold mb-3">Import Mail</div>
                    <Button
                        type="button"
                        aria-label="Close"
                        className="ant-modal-close"
                        onClick={onClose}
                        style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                        <span className="ant-modal-close-x">
                            <span className="anticon anticon-close ant-modal-close-icon">
                                <FontAwesomeIcon icon={faClose} />
                            </span>
                        </span>
                    </Button>
                </div>
                <div>
                    <label htmlFor="label" className="text-sm font-medium">Label:</label>
                    <div className="ant-select w-full css-19bti2s ant-select-single ant-select-show-arrow">
                        {/* Select input */}
                        <select name="" id="" className="border border-gray-300 rounded-md py-1 px-3 w-full">
                            <option value="">Select</option>
                            <option value="">Select</option>
                            <option value="">Select</option>
                            <option value="">Select</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="names" className="text-sm font-medium">Object:</label>
                    <input
                        type="text"
                        name="names"
                        id="names"
                        className="border border-gray-300 rounded-md py-1 px-3 w-full"
                        value=""
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="correspondent" className="text-sm font-medium">Correspondent:</label>
                    <input
                        type="text"
                        name="correspondent"
                        id="correspondent"
                        className="border border-gray-300 rounded-md py-1 px-3 w-full"
                        placeholder="None"
                        value=""
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="details" className="text-sm font-medium">Details:</label>
                    <textarea
                        type="text"
                        name="details"
                        id="details"
                        className="border border-gray-300 rounded-md py-1 px-3 w-full"
                        rows="5"
                    ></textarea>
                </div>
                <div className="mt-3">
                    <label className="text-sm font-medium">Import folder</label>
                    <label className="p-3 border-dashed bg-gray-100 rounded-md border border-gray-600 flex justify-center items-center mx-auto cursor-pointer text-center">
                        <span>Click or drop a document</span>
                        <input type="file" hidden />
                    </label>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button
                        type="button"
                        className="ant-btn css-19bti2s ant-btn-default"
                        onClick={onClose}
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button type="button" className="ant-btn css-19bti2s ant-btn-default ml-2">
                        <span>Save</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ImportMailModal;
