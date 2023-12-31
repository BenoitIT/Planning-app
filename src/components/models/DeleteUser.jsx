/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { Button, Modal } from "antd";

const DeleteUserConfirm = ({setIsModalOpen,isModalOpen}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button className="bg-transparent text-slate-600" onClick={handleOk}>Cancel</Button>,
          <Button className="bg-primary text-white" onClick={handleCancel}>Ok</Button>,
        ]}
        centered
      >
        <div className="h-[100px] flex justify-center items-center">
          <p className="text-lg">
            Do you need to delete a user{" "}
            <span className="text-red-400 text-2xl">Username</span> ???
          </p>
        </div>
      </Modal>
    </>
  );
};

export default DeleteUserConfirm;
