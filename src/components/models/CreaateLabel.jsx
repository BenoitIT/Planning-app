import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const CreateLabel = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold mb-3">Create Label</div>
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
        <div >
          <input
            type="text"
            name="label"
            id="names"
            className="border border-gray-300 rounded-md py-1 px-3 w-full"
          />
        </div>
        <footer className="mt-6 flex justify-end">
          <Button
            type="button"
            className="ant-btn css-19bti2s ant-btn-default"
            onClick={onClose}
          >
            <span>Cancel</span>
          </Button>
          <Button type="button" className="ant-btn css-19bti2s ant-btn-default ml-2">
            <span>Create</span>
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default CreateLabel;
