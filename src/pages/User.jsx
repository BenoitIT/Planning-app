/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faEnvelope,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../layouts/Dashboard";
import { Button } from "antd";
import ResetPasswordModel from "../components/models/ChangePassword";
import EditProfileModel from "../components/models/ChangeProfile";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const User = () => {
  const [OpenPasswordResetModel, setOpenResetPasswordModel] = useState(false);
  const [opeEditProfileModel, setEditProfileModel] = useState(false);
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
  const handleClosePostItModel = () => {
    setOpenResetPasswordModel(false);
  };
  const handleOpenPostItModel = () => {
    setOpenResetPasswordModel(true);
  };
  const handleEditProfileModel = () => {
    setEditProfileModel(true);
  };
  const handleCloseEditProfileModel = () => {
    setEditProfileModel(false);
  };
  return (
    <Layout>
      <div className=" bg-slate-200 p-2 pr-6 h-screen text-sm">
        <div className="mt-3 h-[85vh]  bg-white min-h-[95vh] overflow-auto rounded-3xl relative xs:w-full xs:mx-1 md: w-full">
          <div className="flex justify-end items-center bg-primary w-full h-[200px] relative">
            <div className="border-2 border-primary bg-white lg:h-[220px] lg:w-[220px] md:w-[180px] md:h-[180px] xs:w-[150px] xs:h-[150px] rounded-full absolute lg:-bottom-[110px] xs:-bottom-[70px] md:xs:-bottom-[90px] left-12 flex justify-center items-center overflow-hidden">
              <img
                src={fileDataURL ? fileDataURL : "/images/user.png"}
                className="lg:w-[170px] lg:h-[180px] md:w-[150px] md:h-[160px] xs:w-[130px] xs:h-[140px]"
              />
            </div>
            <div className="relative h-[200px]">
              <label className="bg-green-700 absolute opacity-80 bottom-4 right-6 text-sm text-white px-4 py-1 rounded-md font-medium border border-white">
                Edit
                <input
                  type="file"
                  className="opacity-0 w-full absolute"
                  accept=".png, .jpg, .jpeg"
                  onChange={changeHandler}
                />
              </label>
            </div>
          </div>

          <div className="mt-[180px] lg:ml-20 xs:ml-16 flex flex-col space-y-3">
            <div className="flex flex-row space-x-6">
              <span className="px-1 text-white bg-primary rounded-full w-[22px]">
                <FontAwesomeIcon icon={faUser} className="rounded-full" />{" "}
              </span>
              <span className=" font-bold text-sm">ATETE Arlette</span>
            </div>
            <div className="flex flex-row space-x-6">
              <span className="text-xl w-[22px]">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className=" text-primary"
                />
              </span>
              <span className=" font-thin text-sm">Rue de la volonté,1</span>
            </div>
            <div className="flex lg:flex-row xs:flex-col lg:gap-12 xs:gap-2">
              <div className="flex flex-row space-x-6">
                <span className="text-xl w-[22px]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" text-primary"
                  />
                </span>
                <span className=" font-thin text-sm underline">
                  arletteatete@adminatete.com
                </span>
              </div>
              <div className="flex flex-row space-x-6">
                <span className="text-xl">
                  <FontAwesomeIcon icon={faPhone} className=" text-primary" />
                </span>
                <span className=" font-thin text-sm">0032494625138</span>
              </div>
            </div>
            <div className="pt-6 flex lg:flex-row xs:flex-col lg:gap-4 xs:gap-2 lg:w-auto xs:w-3/4">
              <Button
                onClick={handleEditProfileModel}
                type="button"
                className="bg-primary hover:bg-primary-900 duration-700 text-white xs:px-4 lg:px-4 lg:py-5 xs:py-3 lg:text-sm xs:text-sm rounded-md flex items-center justify-center"
              >
                Edit profile
              </Button>
              <Button
                onClick={handleOpenPostItModel}
                type="button"
                className="border-primary hover:bg-primary-900 duration-700 text-primary lg:px-10 xs:px-4 lg:py-5 xs:py-3 lg:text-sm xs:text-sm rounded-md flex items-center justify-center"
              >
                Change password
              </Button>
            </div>
          </div>
          <div className="ml-20">
            <p className="text-4xl font-bold pt-6">Access</p>
            <div className="flex flex-col space-y-2 text-slate-500 mt-4">
              <div className="ml-6 flex space-x-4">
                <div className="text-primary border border-primary rounded-full h-7 w-7 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="mt-1 text-sm font-light">logistique</div>
              </div>
              <div className="ml-6 flex space-x-4">
                <div className="text-primary border border-primary rounded-full h-7 w-7 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="mt-1 text-sm font-light">organisation</div>
              </div>
              <div className="ml-6 flex space-x-4">
                <div className="text-primary border border-primary rounded-full h-7 w-7 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="mt-1 text-sm font-light">admin</div>
              </div>
              <div className="ml-6 flex space-x-4">
                <div className="text-primary border border-primary rounded-full h-7 w-7 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="mt-1 text-sm font-light">communication</div>
              </div>
              <div className="ml-6 flex space-x-4">
                <div className="text-primary border border-primary rounded-full h-7 w-7 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="mt-1 text-sm font-light">finance</div>
              </div>
            </div>
          </div>
        </div>
        {OpenPasswordResetModel && (
          <ResetPasswordModel onClose={handleClosePostItModel} />
        )}
        {opeEditProfileModel && (
          <EditProfileModel onClose={handleCloseEditProfileModel} />
        )}
      </div>
    </Layout>
  );
};

export default User;
