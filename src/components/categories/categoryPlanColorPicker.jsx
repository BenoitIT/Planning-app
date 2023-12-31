/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CategoryPlan = ({ name, color ,id,handleEdit}) => {
  const getBackgroundColor = () => {
    return color;
  };

  return (
    <div className="w-fit grid grid-cols-2 bg-slate-200 py-3 text-sm mb-2 px-4">
      <p className="text-slate-700">{name}</p>
      <div className="flex flex-row items-center h-full gap-4">
        <div
          className={`h-5 lg:w-[300px] xs:w-full`}
          style={{ backgroundColor: getBackgroundColor() }}
        ></div>
        <span className="text-xl -mt-1 text-slate-600 hover:cursor-pointer" onClick={()=>handleEdit(true)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
      </div>
    </div>
  );
};

export default CategoryPlan;
