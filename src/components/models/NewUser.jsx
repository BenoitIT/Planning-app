/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Input } from "antd";

const NewUserModel = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex  justify-end z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white h-full shadow-lg w-[420px] ease-in duration-300 pt-10">
        <div className="mt-6 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Name
          </label>
          <Input
            value=""
            placeholder="ex:Cedric Kazungu"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-base font-medium opacity-70">
            Email
          </label>
          <Input
            value=""
            placeholder="ex:ckazungu@gmail.com"
            className="bg-slate-100 h-10 text-base"
          />
        </div>
        <div className="mt-12 px-6">
          <Button
            type="button"
            className="bg-primary text-base text-white  w-full"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewUserModel;
