/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layouts/Dashboard";
import { UsersTable, AccountBalances } from "../components/table/userTables";
import { Button, Divider, Input } from "antd";
import { CategoryPlanning } from "../components/data/data";
import NewNewInfoModel from "../components/models/NewAccountInfo";
import NewUser from "../components/models/NewUser";
import CategoryPlan from "../components/categories/categoryPlanColorPicker";
import DeleteUserConfirm from "../components/models/DeleteUser";
import EditPlanCategoryModel from "../components/models/EditCategoryModel";

const Company = () => {
  const [EditDomination, setEditDomination] = useState(false);
  const [EditSlr, setEditSlr] = useState(false);
  const [minimizeUserStats, setMinimizeUserStats] = useState(false);
  const [minimizeEnterpseStats, setMinimizeEnterpseStats] = useState(false);
  const [opeNewModel, setNewModel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [planCategories, setPlanCategories] = useState(CategoryPlanning);
  const [accountBalModel, setAcountBalModel] = useState(false);
  const handleOpenNewModel = () => {
    setNewModel(true);
  };
  const handleCloseNewUserModel = () => {
    setNewModel(false);
  };
  const handleAccountBalance = () => {
    setAcountBalModel(!accountBalModel)
  }
  return (
    <Layout>
      <div className=" bg-slate-200  mr-2 py-2 px-6 min-h-screen text-sm">
        <div className="flex py-4 flex-row pr-8 lg:w-[1490px] md:w-full xs:w-full">
          <strong className=" text-slate-600">Details</strong>
          <Divider className="m-3 bg-slate-300 overflow-hidden xs:w-full md: w-full  " />
        </div>
        <div className="mt-3 min-h-[40vh] bg-white max-h-auto overflow-auto rounded-xl relative xs:w-full xs:mx-1 md: w-full">
          <div className="grid grid-cols-2 gap-6 text-slate-600 md:p-8 xs:p-3 ">
            <p>Denomination</p>
            <div>
              <div>
                <p className={EditDomination ? "hidden" : "flex"}>
                  ADMINATETE SRL
                  <span
                    className="ml-4 -mt-1 text-lg font-light hover:cursor-pointer"
                    onClick={() => setEditDomination(true)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                </p>
              </div>
              <div
                className={EditDomination ? "flex flex-row gap-3" : "hidden"}
              >
                <Input value="ADMINATETE SRL" />
                <Button className="ant-btn css-19bti2s  text-sm border border-green-800">Save</Button>
                <Button onClick={() => setEditDomination(false)} className="ant-btn css-19bti2s  text-sm border border-red-300">Cancel</Button>
              </div>
            </div>
            <p>Status</p>
            <div>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-md border border-blue-400">
                Active
              </span>
            </div>
            <p>Type</p>
            <div>
              <div>
                <div>
                  <p className={EditSlr ? "hidden" : "flex"}>
                    SRL
                    <span
                      className="ml-4 -mt-1 text-lg font-light hover:cursor-pointer"
                      onClick={() => setEditSlr(true)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                  </p>
                </div>
                <div className={EditSlr ? "flex flex-row gap-3" : "hidden"}>
                  <Input value="SRL" />
                  <Button>Save</Button>
                  <Button onClick={() => setEditSlr(false)}>Cancel</Button>
                </div>
              </div>
            </div>
            <p>Creation date</p>
            <div>5/11/2023</div>
            <p>Last modification</p>
            <div>5/11/2023</div>
            <p>Subscription</p>
            <div>
              <span className="bg-violet-100 text-violet-700 px-3 py-1 text-sm rounded-md border border-violet-500">
                organisation
              </span>
            </div>
            <p>Statistics</p>
            <div className="flex flex-col gap-4">
              <div
                className={`bg-slate-100 py-2 rounded-md ${
                  minimizeUserStats || minimizeEnterpseStats
                    ? "laptop:w-[1000px] lg:ml-[-500px]"
                    : "w-auto ml-0"
                }`}
              >
                <div className="flex flex-row gap-2">
                  <span
                    className={`rounded-full px-3 hover:cursor-pointer text-bold opacity-70 ${
                      minimizeUserStats ? "rotate-90" : ""
                    }`}
                    onClick={() => setMinimizeUserStats(!minimizeUserStats)}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>{"Personels de l'entreprise"}</span>
                </div>
                <div
                  className={
                    minimizeUserStats
                      ? "flex flex-col gap-4 py-4 pl-10 text-sm"
                      : "hidden"
                  }
                >
                  <div className="grid grid-cols-2">
                    <p>Alvin</p>
                    <p>alvin@adminatete.com</p>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <p>Atete</p>
                    <p>arletteatete@yahoo.com</p>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <p>Muneza</p>
                    <p>irankundahirwaodilon@23gmail.com</p>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <p>Odilon</p>
                    <p>irankundahirwaodilon@23gmail.com</p>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <p>ATETE Arlette</p>
                    <p>arlette.atete2022@gmail.com</p>
                  </div>
                </div>
              </div>
              <div
                className={`bg-slate-100 py-2 rounded-md ${
                  minimizeEnterpseStats || minimizeUserStats
                    ? "laptop:w-[1000px] lg:ml-[-500px]"
                    : "w-auto ml-0"
                }`}
              >
                <div className="flex flex-row gap-2">
                  <span
                    className={`rounded-full px-3 hover:cursor-pointer text-bold opacity-70 ${
                      minimizeEnterpseStats ? "rotate-90" : ""
                    }`}
                    onClick={() =>
                      setMinimizeEnterpseStats(!minimizeEnterpseStats)
                    }
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>{"Contacts de l'entreprise"}</span>
                </div>
                <div
                  className={
                    minimizeEnterpseStats
                      ? "flex flex-col gap-4 py-4 pl-10"
                      : "hidden"
                  }
                >
                  <div className="grid grid-cols-3">
                    <p>Alvin</p>
                    <p>alvin@adminatete.com</p>
                    <p> +32494625138</p>
                  </div>
                  <div className="grid grid-cols-3">
                    <p>Atete</p>
                    <p>arletteatete@yahoo.com</p>
                    <p>0792405252</p>
                  </div>
                  <div className="grid grid-cols-3 ">
                    <p>Muneza</p>
                    <p>irankundahirwaodilon@23gmail.com</p>
                    <p>0788358513</p>
                  </div>
                  <div className="grid grid-cols-3 ">
                    <p>Odilon</p>
                    <p>irankundahirwaodilon@23gmail.com</p>
                    <p> 0785239914</p>
                  </div>
                  <div className="grid grid-cols-3 ">
                    <p>ATETE Arlette</p>
                    <p>arlette.atete2022@gmail.com</p>
                    <p>+32486367616</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4 flex-row pr-8 lg:w-[1490px] md:w-full xs:w-full">
          <strong className=" text-slate-600">Users</strong>
          <Divider className="m-3 bg-slate-300 overflow-hidden xs:w-full md: w-full  " />
        </div>
        <div className="max-h-auto  bg-white min-h-[40vh] overflow-auto rounded-xl relative xs:w-full xs:mx-1 md: w-full">
          <div className="w-full flex justify-end p-6">
            <Button
              className="text-base hover:text-primary hover:border-primary"
              onClick={handleOpenNewModel}
            >
              New user
            </Button>
          </div>
          <UsersTable setIsModalOpen={setIsModalOpen} />
          <DeleteUserConfirm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <div className={opeNewModel ? "block" : "hidden"}>
            <NewUser onClose={handleCloseNewUserModel} />
          </div>
          <Divider className="m-3 bg-slate-200 h-1 overflow-hidden xs:w-full md: w-full" />
        </div>
        <div className="flex py-4 flex-row mr-8 lg:w-[1400px] md:w-full xs:w-full">
          <strong className="text-slate-600 whitespace-nowrap">
            Schedule configuration{" "}
          </strong>
          <Divider className="m-3 bg-slate-200 h-1 overflow-hidden xs:w-full md: w-full" />
        </div>
        <div className="max-h-auto  bg-white min-h-[40vh] overflow-auto rounded-xl relative xs:w-full xs:mx-1 md: w-full pl-10 py-10">
          <div className="grid grid-flow-row rounded-xl md:w-2/4">
            <div className="flex flex-row justify-between pb-3">
              <p className="text-lg">Categories planning</p>
              <div className="lg:ml-20 lg:mr-0 xs:ml-5 xs:mr-4">
                <Button  type="button" className="text-sm border text-slate-600 border-slate-600" onClick={setIsEditModalOpen}>Add</Button>
              </div>
            </div>
            {planCategories &&
              planCategories.map((category) => (
                <CategoryPlan
                  key={category.id}
                  name={category.categoryName}
                  color={category.color}
                  id={category.id}
                  handleEdit={setIsEditModalOpen}
                />
              ))}
          </div>
        </div>
        <EditPlanCategoryModel
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
        />
        <div className="flex py-4 flex-row mr-8 lg:w-[1400px] md:w-full xs:w-full">
          <strong className="text-slate-600 whitespace-nowrap">
            Configuration Billing{" "}
          </strong>
          <Divider className="m-3 bg-slate-200 h-1 overflow-hidden xs:w-full md: w-full" />
        </div>
        <div className="max-h-auto  bg-white min-h-[20vh] overflow-auto rounded-xl relative xs:w-full xs:mx-1 md: w-full p-10">
          <div className="flex flex-row pb-3">
            <p className="text-sm font-normal">Comptes bancaires</p>
            <div className="ml-10 -mt-2">
              <Button
                type="button"
                onClick={handleAccountBalance}
                className="text-sm text-slate-600 hover:text-green-800 border border-slate-600"
              >
                Nouveau comptè
              </Button>
            </div>
            <div className={accountBalModel?"block":"hidden"}>
              <NewNewInfoModel onClose={handleAccountBalance}/>
            </div>
          </div>
          <AccountBalances />
        </div>
        <div className="flex py-4 flex-row mr-8 lg:w-[1400px] md:w-full xs:w-full">
          <strong className="text-slate-600 whitespace-nowrap">Gmail </strong>
          <Divider className="m-3 bg-slate-200 h-1 overflow-hidden xs:w-full md: w-full" />
        </div>
        <div className="max-h-auto  bg-white min-h-[10vh] overflow-auto rounded-xl relative xs:w-full xs:mx-1 md: w-full p-10">
          <Button
            type="button"
            className="bg-primary hover:bg-primary-900 duration-700 text-white xs:px-2 lg:px-4 lg:py-3 xs:py-2 lg:text-sm xs:text-sm rounded-md flex items-center justify-center"
          >Connect</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Company;
