/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dayjs from "dayjs";
import { Button } from "antd";
import { add30Minutes } from "../utlities/convertTimeString";
import { useDispatch,useSelector } from "react-redux";
import {
  handleAddMoreEventInfo,
  handleAddEventInfo,
} from "../../redux/reducers/calendarReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCalendar } from "@fortawesome/free-solid-svg-icons";
const AddBriefInfo = ({currentMonthIndex}) => {
  const dispatch = useDispatch();
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const selectedHour=useSelector(state=>state.currentMonthIndex.selectedEventHour);
  const selectedDay=useSelector(state=>state.currentMonthIndex.selectedEventDate);
  return (
    <div className="w-[400px] bg-white shadow-lg min-h-[180px] p-3">
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => dispatch(handleAddEventInfo(false))}
        />
      </div>
      <div
        className={`w-full border-b ${
          !isTitleFocused ? "border-slate-300" : "border-green-700"
        }  mt-6`}
      >
        <input
          className="outline-none  w-full text-2xl"
          placeholder="Ajouter un titre"
          onFocus={() => setIsTitleFocused(true)}
          onBlur={() => setIsTitleFocused(false)}
        />
      </div>
      <div className="flex flex-row gap-6 mt-4">
        <span className="text-slate-500">
          <FontAwesomeIcon icon={faCalendar} />
        </span>
        <p className="text-sm mt-1">{selectedDay}  {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}({selectedHour}-{add30Minutes(selectedHour)})</p>
      </div>
      <div className="flex justify-end flex-row mt-4">
        <Button
          type="button"
          className="uppercase text-sm font-medium hover:bg-slate-100 px-2"
          onClick={() => {
            dispatch(handleAddMoreEventInfo(true));
            dispatch(handleAddEventInfo(false));
          }}
        >
          Plus de détails
        </Button>
        <Button
          type="button"
          className="uppercase text-sm font-medium hover:bg-green-100 px-2 text-green-600"
        >
          Souvegarder
        </Button>
      </div>
    </div>
  );
};
export default AddBriefInfo;
