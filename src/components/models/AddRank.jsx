/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faFileLines,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Select, Upload, message } from "antd";
import React, { useState } from "react";
const NewRank = ({ ModalHeader, onClose, saveRank, boards }) => {
  const [fileName, setFileName] = useState();
  const [boardname, setName] = useState();
  const { Dragger } = Upload;
  let availableRanks = [];
  if (boards && boards.length > 0) {
    boards.map((board) => {
      availableRanks.push({
        value: board.Name,
        label: board.Name,
      });
    });
  }
  const props = {
    name: "file",
    multiple: false,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        setFileName(info.file.name);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg mt-[-20vh] shadow-lg w-[500px]">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold mb-3 text-bold">
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
        <div className="flex flex-row w-full">
          {ModalHeader !== "New cupboard" && (
            <div className="flex flex-col w-full">
              <Select
                className={
                  ModalHeader !== "New Rayon" ? "w-full" : "w-2/4 outline-none"
                }
                defaultValue="Armoire..."
                options={availableRanks}
              />
              <span className="text-red-300 text-xs">* Required</span>
            </div>
          )}
          {ModalHeader !== "New Rayon" && ModalHeader !== "New cupboard" && (
            <div className="flex flex-col w-full">
              <div className="flex">
                <span className="text-xl font-light">/</span>
                <Select
                  className="w-full outline-none"
                  defaultValue="Rayons..."
                  options={availableRanks}
                />
              </div>
              <span className="text-red-300 text-xs">* Required</span>
            </div>
          )}
          {ModalHeader !== "New Rayon" &&
            ModalHeader !== "New cupboard" &&
            ModalHeader !== "New Bard" && (
              <>
                <span className="text-xl font-light">/</span>
                <Select
                  className="w-full outline-none"
                  defaultValue="Forde..."
                  options={availableRanks}
                />
              </>
            )}
        </div>
        <div className="mt-3">
          <label htmlFor="names" className="text-sm font-normal opacity-70">
            New name
          </label>
          <input
            type="text"
            name="title"
            id="names"
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border border-slate-300 rounded-md py-1 px-3 w-full"
            value={boardname}
            placeholder="New element name"
          />
          {ModalHeader !== "New Rayon" &&
            ModalHeader !== "New cupboard" &&
            ModalHeader !== "New Bard" && (
              <div className="mt-3">
                <Dragger {...props} className="border-black">
                  <div className="py-[60px]">
                    <p className="text-center text-4xl">
                      {(fileName && fileName?.endsWith(".jpg")) ||
                      fileName?.endsWith(".png") ||
                      fileName?.endsWith(".jpeg") ? (
                        <FontAwesomeIcon icon={faImage} />
                      ) : (
                        fileName && <FontAwesomeIcon icon={faFileLines} />
                      )}
                    </p>
                    <p className="text-xs">
                      {fileName
                        ? fileName
                        : "Click or upload document/Image here"}
                    </p>
                  </div>
                </Dragger>
              </div>
            )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            className="ant-btn css-19bti2s ant-btn-default border-red-400 text-red-400 hover:border-red-400 hover:text-red-400"
            onClick={onClose}
          >
            <span>Concel</span>
          </Button>
          <Button
            type="button"
            className="bg-primary text-white ant-btn css-19bti2s ant-btn-default ml-2"
            onClick={saveRank}
          >
            <span>Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewRank;
