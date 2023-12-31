/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Space } from "antd";
import React, { useState, useEffect } from "react";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const EditProfileModel = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("the type of file is not supported");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex  justify-end z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white h-full shadow-lg w-[420px] ease-in duration-300">
        <div className="flex justify-center py-6">
          <div className="text-3xl font-bold mb-3 text-bold text-slate-800">
            Edit profile
          </div>
        </div>
        <div className="w-full flex  justify-center relative">
          <div className="border-2 border-primary bg-white h-[220px] w-[220px] rounded-full flex justify-center items-center overflow-hidden">
            <img src={fileDataURL?fileDataURL:"/images/user.png" }className="w-[170px] h-[180px]" />
          </div>

          <label className="flex flex-col w-fit hover:bg-gray-100 hover:border-gray-300 absolute top-[150px] left-[280px]">
            <div className="flex flex-col items-center justify-center border border-primary w-fit p-1 px-2 rounded-full  bg-white hover:cursor-pointer">
              <span className="text-2xl text text-primary">
                <FontAwesomeIcon icon={faCamera} />
              </span>
            </div>
            <input type="file" className="opacity-0" accept='.png, .jpg, .jpeg' onChange={changeHandler} />
          </label>
        </div>
        <div className="w-full flex  justify-center py-2">
          <Button
            type="button"
            className="border-slate-900   duration-700 text-slate-900 px-4 py-3 text-lg rounded flex items-center justify-center"
          >
            Save picture
          </Button>
        </div>

        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Name
          </label>
          <Input
            value="ATETE Arlette"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Email
          </label>
          <Input
            value="arletteatete@adminatete.com"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Address
          </label>
          <Input
            value="Rue de la volonté,1"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Contacts
          </label>
          <Input
            value="0032494625138"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-3 px-6">
          <label
            htmlFor="names"
            className="text-base text-slate-700 font-medium opacity-70"
          >
            To validate the changes, be sure to enter your password
          </label>
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Password
          </label>
          <Input value="" className="bg-slate-100 h-10 text-base" />
        </div>
        <div className="mt-12 px-6">
          <Button
            type="button"
            className="bg-primary text-base text-white ant-btn css-19bti2s ant-btn-default w-full"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModel;
