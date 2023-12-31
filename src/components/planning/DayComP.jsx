/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowIndex,addRightBorder }) => {
  return (
    <div
      className={`border-b border-l border-slate-400  flex flex-col shadow-sm ${
        rowIndex === 0 ? "border-t pb-10" : "hover:bg-slate-200"
      } ${addRightBorder ? "border-r" : ""}`}
    >
      {rowIndex === 0 && (
        <div className="w-full border-b border-slate-400">
        <p
          className={`text-xs p-1 my-1 text-center w-fit ${
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
              ? "text-green-900  rounded-full px-1 py-[0.6px] mt-[11px]"
              : ""
          }`}
        >
          {day.format("dddd").toUpperCase()}
        </p>
        </div>
      )}
      <div className="flex p-2 items-center">
        <p
          className={`text-xs p-1 my-1 text-center w-fit ${
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
              ? "bg-green-900  text-white rounded-full px-1 py-[0.6px]"
              : ""
          }`}
        >
          {day.format("DD")}
        </p>
      </div>
    </div>
  );
};
export default Day;

export const LittleDaySize = ({ day, rowIndex,addRightBorder }) => {
  return (
    <div
      className={`border-b border-l border-slate-400  flex flex-col rounded shadow-sm ${
        rowIndex === 0 ? "border-t" : ""
      } ${addRightBorder ? "border-r" : ""}`}
    >
      {rowIndex === 0 && (
        <div className="w-full border-b border-slate-400">
        <p
          className={`text-xs px-2  text-center w-fit ${
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
              ? "text-green-800 font-medium"
              : ""
          }`}
        >
          {day.format("dd").toUpperCase()}
        </p>
        </div>
      )}
      <div className="flex items-center">
        <p
          className={`text-xs px-2 text-center w-fit ${
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
              ? "text-green-800"
              : "text-white"
          }`}
        >
          {day.format("DD")}
        </p>
      </div>
    </div>
  );
};
