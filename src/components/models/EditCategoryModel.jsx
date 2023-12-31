/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { ColorPicker } from "./ColorPicker";

const EditPlanCategory = ({ setIsModalOpen, isModalOpen }) => {
  const [EditColorCategory, setColorCategory] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#bb6162");
  console.log("NMNM", selectedColor);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Edit category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="relative"
        footer={[
          <Button type="button" className="bg-transparent text-slate-600 border border-slate-600" onClick={handleOk}>
            Quit
          </Button>,
          <Button type="button" className="bg-primary text-white" onClick={handleCancel}>
            Save
          </Button>,
        ]}
        centered
      >
        <div className="h-[120px] flex flex-col justify-center items-center py-3">
          <div className="w-full" onClick={() => setColorCategory(false)}>
            <label className="text-base font-normal opacity-70">Title</label>
            <Input className="h-10 w-full" placeholder="Title" />
          </div>
          <div className="w-full">
            <div className="w-full" onClick={() => setColorCategory(false)}>
              <label className="text-base font-normal opacity-70">Color</label>
            </div>
            <div
              style={{ backgroundColor: `${selectedColor}` }}
              className={`h-8 w-full hover:border hover:border-red-900 hover:cursor-pointer`}
              onClick={() => setColorCategory(true)}
            ></div>
          </div>
        </div>
        <div className={EditColorCategory ? "absolute top-[180px]" : "hidden"}>
          <ColorPicker
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        </div>
      </Modal>
    </div>
  );
};

export default EditPlanCategory;
