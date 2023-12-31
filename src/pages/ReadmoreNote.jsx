/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Dashboard";
import MyPostIts from "../components/post_it";
import { Tabs } from "antd";
import { Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import EditNote from "../components/models/EditNote";
import { Link, useParams } from "react-router-dom";
import { useLazyGetSingleNoteQuery } from "../redux/api/apiSlice";
const ReadmoreNote = () => {
  const { TabPane } = Tabs;
  const { id } = useParams();
  // State to manage edit mode
  const [isEditMode, setIsEditMode] = useState(false);
  const [notesTitle, setEditNotesTitle] = useState(false);
  const [data, setData] = useState([]);

  const [
    getSingleNote,
    {
      isLoading: isGettingSingleNote,
      error: getSingleNoteError,
      isSuccess: isSingleNoteGot,
      data: gotSingleNoteData,
    },
  ] = useLazyGetSingleNoteQuery();
  const handleGetSingleNote = async () => {
    try {
      const { data: responseData } = await getSingleNote({ id }).unwrap();
      setData(responseData);
    } catch (error) {
      console.error("Error getting single note", error);
    }
  };
  useEffect(() => {
    if (isSingleNoteGot) {
      setData(gotSingleNoteData);
    }
  });
  useEffect(() => {
    handleGetSingleNote();
  }, []);
  function callback(key) {
    console.log(key);
  }
  // State to manage edit mode

  // Function to toggle edit mode
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  console.log(data);
  return (
    <Layout>
      <div className="bg-slate-200 p-2">
        <div className="mx-4 mt-3 p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh]  w-full md:w-auto overflow-auto rounded-2xl relative">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Notes" key="1">
              <div className="m-0 md:m-5 p-2 pt-4 md:p-4 bg-white min-h-[80vh] w-full md:w-auto rounded-2xl relative">
                <div className="flex justify-between text-green-900 text-lg font-bold">
                  <div className="rounded-full p-2 bg-primary-200 cursor-pointer">
                    <Link to="/dashboard/notes">
                      <span className="px-3 py-2 rounded-full bg-green-50 shadow-sm">
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </span>
                    </Link>
                  </div>
                  <Button
                    type="button"
                    className="ant-btn css-19bti2s ant-btn-default ant-btn-dangerous"
                  >
                    <span>Supprimer</span>
                  </Button>
                </div>
                <div className="border rounded p-4 my-4 px-8">
                  <div className="flex gap-4 items-center">
                    <h2 className="text-xl my-4 font-semibold text-primary-600">
                      {data?.title}
                    </h2>
                    <span
                      className="text-2xl cursor-pointer hover:text-primary-800 duration-500"
                      onClick={() => setEditNotesTitle(true)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                        <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      notesTitle ? "flex flex-row gap-3 my-4" : "hidden"
                    }
                  >
                    <Input value="Meeting" className="outline-none" />
                    <Button
                      type="button"
                      className="ant-btn css-19bti2s  text-sm border border-green-800"
                    >
                      Save
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setEditNotesTitle(false)}
                      className="ant-btn css-19bti2s  text-sm border border-red-300"
                    >
                      Cancel
                    </Button>
                  </div>
                  {isEditMode ? (
                    <EditNote title={data?.title} />
                  ) : (
                    <div className="flex gap-4 items-start my-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {data?.description}
                        </p>
                      </div>
                      <Button name="edit" onClick={handleEditClick}>
                        <span className="text-2xl cursor-pointer hover:text-primary-800 duration-500">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                          </svg>
                        </span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabPane>
            <TabPane tab="Post it" key="2">
              <MyPostIts />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ReadmoreNote;
