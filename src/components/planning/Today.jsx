/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { handleAddMoreEventInfo,handleAddEventInfo,handleAddEventTimingInfo } from "../../redux/reducers/calendarReducer";
export const ShowToDay = ({ currentDay }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex-1 grid grid-cols-1">
      <div className="text-xs border-l border-r border-b border-t border-slate-400  flex flex-col shadow-sm">
        <div className="w-full border-b border-slate-400">
          <div className="text-xs text-center w-fit text-green-700 px-1">
            <div className={`border-slate-400 h-full py-[6px]`}>
              <span className="pl-2">
                {currentDay.date.format("dddd").toUpperCase()}
              </span>
            </div>
          </div>
          <p className="text-xs text-center w-fit text-green-700 pl-4">
            {currentDay.date.format("DD")}
          </p>
        </div>
        <div className="flex flex-row gap-0">
          <ul className={` border-slate-400 border-r`}>
            {currentDay.hours.map((hour, hourIdx) => (
              <div
                key={hourIdx}
                className={`py-[8.3px] px-2 ${
                  hour.endsWith("30") ? "border-b border-slate-400 w-full" : ""
                }`}
              >
                <li>{hour.endsWith("30") ? "" : hour}</li>
              </div>
            ))}
          </ul>
          <ul className="w-full">
            {currentDay.hours.map((hour, hourIdx) => (
              <div
                key={hourIdx}
                className={`bg-slate-50 ${
                  hour.includes("23")
                    ? "border-none"
                    : "w-full border-b border-slate-400"
                } ${
                  hour.endsWith("00") ? "border-dashed" : ""
                } hover:bg-slate-300`}
                onDoubleClick={() => dispatch(handleAddMoreEventInfo(true))}
                onClick={() => {
                  dispatch(handleAddEventInfo(true));
                  const payload = {
                    hour: hour,
                    day: currentDay.date.format("DD"),
                  };
                  dispatch(handleAddEventTimingInfo(payload));
                  var containerDiv = document.getElementById('planning');
                   containerDiv.scrollTop = 0;
                }}
              >
                <li
                  className={`${hour.includes("23") ? "" : "py-[12.08px]"}`}
                ></li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
