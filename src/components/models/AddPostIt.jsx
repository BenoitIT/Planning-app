/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import React, { useState } from "react";
import { useCreateNoteMutation } from "../../redux/api/apiSlice";
import { toast } from "react-toastify";
const AddPostItModel = ({
  ModalHeader,
  onClose,
  isRecording,
  handleRecording,
}) => {
  const [createNote, { 
    isLoading: isCreatingNote,
    error: createNoteError,
    isSuccess: isNoteCreated,
    data: createdNoteData,
  }] = useCreateNoteMutation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: responseData } = await createNote({
        title: formData.title,
        description: formData.description,
      }
      ).unwrap();
      toast.success('Note created successfully');
      // You can reset the form if needed
      window.location.reload();
      setFormData({
        title: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating note', error);
      toast.error('Error creating note');
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold mb-3 text-bold text-primary">
            {ModalHeader}
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
          <label htmlFor="names" className="text-sm font-medium opacity-70">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="names"
            onChange={handleChange}
            value={formData.title}
            className="border-none bg-slate-100 rounded-sm py-2 px-3 w-full"  
          />
        </div>
        <div className="mt-3">
          <label className="text-sm font-medium opacity-70">Description</label>
          <div className="h-fit relative">
            <textarea
              id="message"
              rows="4"
              name="description"
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border-none opacity-80 bg-slate-100"
            ></textarea>
            <div className="absolute top-16 right-2 px-2 py-1 bg-primary rounded-full text-sm text-white">
              <span
                className={`${
                  isRecording ? "animate-ping" : "animate-none"
                } absolute right-1 h-5 w-5 inline-flex rounded-full bg-primary opacity-80`}
              ></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faMicrophone}
                  onClick={handleRecording}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            className="ant-btn css-19bti2s ant-btn-default"
            onClick={onClose}
          >
            <span>Quit</span>
          </Button>
          <Button
            type="button"
            className="bg-primary text-white ant-btn css-19bti2s ant-btn-default ml-2"
            onClick={handleSubmit}
          >
            <span>
              {isCreatingNote ? "Saving..." : "Save"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPostItModel;
