/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const ResetPasswordModel = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[600px]">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold mb-3 text-bold text-primary">
            Change your password
          </div>
          <Button
            type="button"
            aria-label="Close"
            className="ant-modal-close"
            onClick={onClose}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <span className="ant-modal-close-x">
              <span className="anticon anticon-close ant-modal-close-icon opacity-60 text-xl">
                <FontAwesomeIcon icon={faClose} />
              </span>
            </span>
          </Button>
        </div>
        <div className="mt-3">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Current password
          </label>
          <Input.Password
            className="h-12"
            placeholder="***************"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="mt-3">
          <label className="text-base font-medium opacity-70">
            New password
          </label>
          <Input.Password
            className="h-12"
            placeholder="12345678"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="mt-3">
          <label className="text-base font-medium opacity-70">
            Confirm new password
          </label>
          <Input.Password
            className="h-12"
            placeholder="12345678"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            className=" text-base css-19bti2s ant-btn-default"
          >
            Quit
          </Button>
          <Button
            type="button"
            className="bg-primary text-base text-white ant-btn css-19bti2s ant-btn-default ml-2"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModel;
