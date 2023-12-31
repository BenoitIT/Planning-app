/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer,faClose} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const SingleRankInfo = ({onClose,rank}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg -mt-[20vh] shadow-lg w-[600px]">
        <div className="flex flex-row justify-between">
          <h3 className="text-base font-bold pb-4">armoire</h3>
          <span className="anticon anticon-close ant-modal-close-icon font-light hover:cursor-pointer opacity-60 text-xl" onClick={onClose}>
                <FontAwesomeIcon icon={faClose} />
              </span>
        </div>
        <div className="px-2 py-6 flex flex-col gap-2">
        <p className="text-base text-slate-600"><span className="pr-4 text-2xl"><FontAwesomeIcon icon={faServer} className="opacity-80" /></span><span>Nome:</span><span className="pl-2 font-bold text-lg">{rank?.Name}</span> </p>
         <p className="text-sm text-slate-600"><span className="pr-6">Type:</span><span>armoire</span></p>
         <p  className="text-sm text-slate-600"><span className="pr-6">Taille:</span><span>{rank?.size}</span></p>
         <p className="text-sm text-slate-600"><span className="pr-2">Chemin:</span><span>{rank?.Name}</span></p>
         <p className="text-sm text-slate-600"><span className="pr-6">Créer:</span><span >{rank?.Added}</span></p>
         <p className="text-sm text-slate-600"><span className="pr-2">Modifier:</span><span>{rank?.Charge}</span></p>
        </div>
        <Button
          type="button"
          className="bg-transparent text-red-400 text-sm border-red-400 border hover:border-red-400 ant-btn mx-2 px-6"
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
};

export default SingleRankInfo;
