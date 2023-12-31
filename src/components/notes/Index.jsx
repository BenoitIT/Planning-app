/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AddNewNotesModel from "../models/AddPostIt";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLazyGetNotesQuery } from "../../redux/api/apiSlice";
import { toast } from "react-toastify";
function NotesComponent() {
  const { t } = useTranslation('notes');
  const [OpenNewNotesModel, setOpenNewNotes] = useState(false);
  const [recordStarted, setRecordStarted] = useState(false);
  const [data, setData] = useState([]);
  const handleOpenNewNotes = () => {
    setOpenNewNotes(true);
  };
  const handleClosePostItModel = () => {
    setOpenNewNotes(false);
  };
  const [getNotes, { 
    isLoading: isGettingNotes,
    error: getNotesError,
    isSuccess: isNotesGot,
    data: gotNotesData,
  }] = useLazyGetNotesQuery();
  const handleGetNotes = async () => {
    try {
      const { data: responseData } = await getNotes().unwrap();
      setData(responseData);
    } catch (error) {
      console.error('Error getting notes', error);
      toast.error('Error getting notes');
    }
  }
  useEffect(() => {
    if (isNotesGot) {
      setData(gotNotesData);
    }
  }
  );
  useEffect(() => {
    handleGetNotes();
  }
    , []);

  return (
    <div className="mt-10 h-full max-h-[75%]">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between m-3">
        <h2 className="text-2xl font-bold">{t('notes.note.titre2')}</h2>
        <Button
          type="button"
          className="bg-primary hover:bg-primary-900 duration-700 text-white p-2 md:px-20 px-8 rounded flex items-center justify-center"
          onClick={handleOpenNewNotes}
        >
          {t('notes.note.btn-1')}
        </Button>
      </div>
      <div className="mx-3">
        {data?.map((note) => (
          <div
            key={note.id}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-green-50 p-4 my-2 rounded cursor-pointer"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg text-primary-800">
                {note.title}
              </h3>
              <div>
                <Button
                  type="button"
                  className="ant-btn css-19bti2s ant-btn-default"
                >
                  <Link to={`/dashboard/notes/${note.id}`}>
                    <span>   {t('notes.note.btn-2')}</span>
                  </Link>
                </Button>
              </div>
            </div>
            <p className="py-2 font-normal">
              <div>{note.description}</div>
            </p>
            <span className="text-xs font-light">{note.createdAt}</span>
          </div>
        ))}
      </div>
      {OpenNewNotesModel && (
        <AddNewNotesModel
          ModalHeader="Add note"
          onClose={handleClosePostItModel}
          isRecording={recordStarted}
        />
      )}  
    </div>
  );
}

export default NotesComponent;
