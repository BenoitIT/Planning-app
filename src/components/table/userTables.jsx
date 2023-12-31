/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const UsersTable = ({setIsModalOpen}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "key",
      align: "center"
    },
    { title: "Email", dataIndex: "Email", key: "key" , align: "center"},
    { title: "Role", dataIndex: "Role", key: "key", align: "center" },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "key",
      align: "center",
      render: (_, record) => (
        <div className="flex flex-row gap-3 justify-center">
          <Button
            className="bg-transparent border hover:border-primary focus:border-primary"
            onClick={null}
          > 
          <Link to="/dashboard/user">
            <span className="text-slate-600">
              <FontAwesomeIcon icon={faEye} />
            </span>
            </Link>
          </Button>
          <Button
            className="bg-transparent border hover:border-primary focus:border-primary"
            onClick={()=>setIsModalOpen(true)}
          >
            <span className="text-slate-600">
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </Button>
        </div>
      ),
    },
  ];
  const users = [
    {
      key: "1",
      Name: "ATETE Arlette",
      Email: "arletteatete@adminatete.com",
      Role: "organisation",
    },
    {
      key: "2",
      Name: "Alvin",
      Email: "alvin@adminatete.com",
      Role: "",
    },
    {
      key: "3",
      Name: "sanaspe",
      Email: "sanaspesrl@gmail.com",
      Role: "",
    },
  ];
  return <Table dataSource={users} pagination={true} columns={columns}></Table>;
};
 
export const AccountBalances=()=>{
  const columns = [
    {
      title: "Intitulé du compte",
      dataIndex: "Intitulé du compte",
      key: "key",
    },
    { title: "Numéro de compte", dataIndex: "Numéro de compte", key: "key"},
    { title: "Type de compte", dataIndex: "Type de compte", key: "key" },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "key",   
    },
  ]; 
  const accounts=[];
  return <Table dataSource={accounts} pagination={true} columns={columns}></Table>;
}
