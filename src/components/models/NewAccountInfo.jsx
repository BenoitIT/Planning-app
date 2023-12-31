/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Input, Select } from "antd";

const NewNewInfoModel = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex  justify-end z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white h-full shadow-lg w-[420px] ease-in duration-300 pt-10">
        <div className="mt-6 px-6">
          <p className="text-3xl font-bold text-center text-slate-700 pb-4">
            Nouveau compte
          </p>
        </div>
        <div className="mt-6 px-6">
          <label htmlFor="names" className="text-sm font-medium opacity-70">
            Intitulé
          </label>
          <Input
            value=""
            placeholder="ADMINATETE ACCOUNT"
            className="bg-slate-100 h-10 text-sm"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-sm font-medium opacity-70">
            Numéro de compte
          </label>
          <Input
            value=""
            placeholder="AL237485757574874848"
            className="bg-slate-100 h-10 text-sm"
          />
        </div>
        <div className="mt-3 px-6">
          <label htmlFor="names" className="text-sm font-medium opacity-70">
            Numéro de compte
          </label>
          <Select
            defaultValue="Courant"
            className="w-full bg-slate-100 h-10"
            options={[
              { value: "Courant", label: "Courant" },
              { value: "epargne", label: "epargne" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </div>
        <div className="mt-12 px-6 flex flex-row justify-end gap-4">
          <Button
            type="button"
            className="bg-white text-sm text-slate-800 border-slate-800 "
          >
            former
          </Button>
          <Button
            type="button"
            className="bg-primary text-sm text-white px-4"
          >
            Enregistre
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewNewInfoModel;
