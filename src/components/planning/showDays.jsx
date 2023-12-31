/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { handleChangeCurrentWeek } from "../../redux/reducers/calendarReducer";
import {
  faAngleRight,
  faAngleLeft,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  handleSetCurrentMonth,
  handleSetCalendarView,
  handleSetDayView,
  handleSetViewSmall,
  handleAddMoreEventInfo,
  handleAddEventInfo,
  handleAddEventTimingInfo,
} from "../../redux/reducers/calendarReducer";
import Day, { LittleDaySize } from "./DayComP";

export const ShowDays = ({ currentMonth }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIndex={i} addRightBorder={idx === 6} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
export const ShowSmallerCalDays = ({ currentMonth }) => {
  return (
    <div className="grid grid-cols-7 grid-rows-5 h-full">
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <LittleDaySize
              day={day}
              key={idx}
              rowIndex={i}
              addRightBorder={idx === 6}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export const PlanningHeader = () => {
  const dispatch = useDispatch();
  const currentMonthIndex = useSelector(
    (state) => state.currentMonthIndex.currentMonthIndex
  );
  const currentDay = useSelector((state) => state.currentMonthIndex.currentDay);
  const CalendarView = useSelector(
    (state) => state.currentMonthIndex.calendarView
  );
  const viewSmallCalendar = useSelector(
    (state) => state.currentMonthIndex.viewSmallCalendar
  );
  const currentWeekDays = useSelector(
    (state) => state.currentMonthIndex.currentWeek
  );
  useEffect(() => {
    dispatch(handleSetViewSmall(false));
  }, [currentDay, dispatch]);
  const setPreviousMonth = () => {
    if (CalendarView === "today") {
      dispatch(handleSetDayView(currentDay - 1));
    } else if (CalendarView === "week" || CalendarView === "work week") {
      dispatch(handleChangeCurrentWeek(currentWeekDays - 7));
      if (currentWeekDays < 1 && currentWeekDays > -7) {
        dispatch(handleSetCurrentMonth(currentMonthIndex - 1));
        dispatch(handleChangeCurrentWeek(29));
      }
    } else {
      dispatch(handleSetCurrentMonth(currentMonthIndex - 1));
    }
  };
  const setNextMonth = () => {
    if (CalendarView === "today") {
      dispatch(handleSetDayView(currentDay + 1));
    } else if (CalendarView === "week" || CalendarView === "work week") {
      dispatch(handleChangeCurrentWeek(currentWeekDays + 7));
      if (currentWeekDays > 29) {
        dispatch(handleSetCurrentMonth(currentMonthIndex + 1));
        if (currentWeekDays >= 29 && currentWeekDays < 31) {
          dispatch(handleSetCurrentMonth(currentMonthIndex + 1));
          dispatch(handleChangeCurrentWeek(7));
        }
      }
    } else {
      dispatch(handleSetCurrentMonth(currentMonthIndex + 1));
    }
  };

  return (
    <div className="flex justify-between w-full border-t border-r border-l border-slate-400 py-2 px-4 bg-slate-50">
      <div className="flex flex-row gap-2 text-xs">
        <p>
          <span
            className="rounded-full hover:bg-lightgray mr-2 hover:cursor-pointer text-bold opacity-70"
            onClick={setPreviousMonth}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </p>
        <p>
          <span
            className="rounded-full hover:bg-lightgray  hover:cursor-pointer text-bold opacity-70"
            onClick={setNextMonth}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </p>
        <p
          className="hover:cursor-default"
          onClick={() => dispatch(handleSetViewSmall(!viewSmallCalendar))}
        >
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <p>
          {" "}
          <span
            className="rounded-full hover:bg-lightgray  hover:cursor-pointer text-bold opacity-70"
            onClick={() => dispatch(handleSetViewSmall(!viewSmallCalendar))}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-2 text-xs uppercase hover:cursor-pointer">
        <p
          className="border-r border-slate-400"
          onClick={() => dispatch(handleSetCalendarView("today"))}
        >
          <span
            className={`${
              CalendarView === "today" ? "text-green-700 font-semibold" : ""
            } mr-1`}
          >
            to day
          </span>
        </p>
        <p
          onClick={() => dispatch(handleSetCalendarView("week"))}
          className={`${
            CalendarView === "week" ? "text-green-700 font-semibold" : ""
          }`}
        >
          week
        </p>
        <p
          onClick={() => dispatch(handleSetCalendarView("work week"))}
          className={`${
            CalendarView === "work week" ? "text-green-700 font-semibold" : ""
          }`}
        >
          work week
        </p>
        <p
          onClick={() => dispatch(handleSetCalendarView("month"))}
          className={`${
            CalendarView === "month" ? "text-green-700 font-semibold" : ""
          }`}
        >
          month
        </p>
        <p
          onClick={() => dispatch(handleSetCalendarView("agenda"))}
          className={`${
            CalendarView === "agenda" ? "text-green-700 font-semibold" : ""
          }`}
        >
          agenda
        </p>
      </div>
    </div>
  );
};

export const ShowWeeklyDays = ({ currentWeekWithHours }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex-1 grid grid-cols-7">
      {currentWeekWithHours.map((dayInfo, idx) => (
        <div
          className={`text-xs border-l border-b border-t border-slate-400  flex flex-col shadow-sm ${
            idx === 6 ? "border-r border-slate-400" : ""
          }`}
          key={idx}
        >
          <div className="w-full border-b border-slate-400">
            <div
              className={`text-xs text-center w-fit ${
                dayInfo.date.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
                  ? "text-green-700 font-medium px-1"
                  : ""
              } ${idx === 0 ? "pl-[50px]" : "pl-2"}`}
            >
              <div
                className={`${
                  idx === 0 ? "border-l" : ""
                } border-slate-400 h-full py-[6px]`}
              >
                <span className={idx == 0 ? "pl-2" : ""}>
                  {dayInfo.date.format("dddd").toUpperCase()}
                </span>
              </div>
            </div>
            <p
              className={`text-xs pl-2 text-center w-fit  border-slate-400 ${
                dayInfo.date.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
                  ? "text-green-700 font-medium"
                  : ""
              } ${idx == 0 ? "ml-[50px] border-l" : ""}`}
            >
              {dayInfo.date.format("DD")}
            </p>
          </div>
          <div className="flex flex-row gap-0">
            <ul
              className={` border-slate-400 border-r ${
                idx !== 0 ? "hidden" : ""
              }`}
            >
              {dayInfo.hours.map((hour, hourIdx) => (
                <div
                  key={hourIdx}
                  className={`py-[8.3px] px-2 ${
                    hour.endsWith("30")
                      ? "border-b border-slate-400 w-full"
                      : ""
                  }`}
                >
                  <li>{hour.endsWith("30") ? "" : hour}</li>
                </div>
              ))}
            </ul>
            <ul className="w-full">
              {dayInfo.hours.map((hour, hourIdx) => (
                <div
                  key={hourIdx}
                  className={`bg-slate-50 ${
                    hour.includes("23")
                      ? "border-none"
                      : "w-full border-b border-slate-400"
                  } ${
                    hour.endsWith("00") ? "border-dashed" : ""
                  } hover:bg-slate-300`}
                  onDoubleClick={() => {
                    dispatch(handleAddMoreEventInfo(true));
                    dispatch(handleAddEventInfo(false));
                  }}
                  onClick={() => {
                    dispatch(handleAddEventInfo(true));
                    const payload = {
                      hour: hour,
                      day: dayInfo.date.format("DD"),
                    };
                    dispatch(handleAddEventTimingInfo(payload));
                    var containerDiv = document.getElementById("planning");
                    containerDiv.scrollTop = 0;
                  }}
                >
                  <li
                    className={`${hour.includes("23") ? "" : "py-[12.06px]"}`}
                  ></li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
