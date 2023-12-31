/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Layout from "../layouts/Dashboard";
import { useSelector,useDispatch } from "react-redux";
import { ShowToDay } from "../components/planning/Today";
import SavePlanSchedule from "../components/models/PlanScheduleModel";
import AddBriefInfo from "../components/models/recordSchedule";
import { handleChangeCurrentWeek } from "../redux/reducers/calendarReducer";
import {
  getMonths,
  getWeek,
  getHoursForDay,
  DetectCurrentWeek,
  returnWeekIndex
} from "../components/utlities/GenerateDays";
import {
  ShowDays,
  PlanningHeader,
  ShowWeeklyDays,
  ShowSmallerCalDays,
} from "../components/planning/showDays";
const PlanSchedule = () => {
  const dispatch=useDispatch();
  const currentDate = dayjs();
  const year = currentDate.year();
  const [nowDayMonth, setNowDayMonth] = useState(currentDate.month());
  const [currentMonth, setCurrentMonth] = useState(getMonths());
  const [currentWeek, setCurrentWeek] = useState(DetectCurrentWeek(currentDate));
  const [currentWeekWithHours, setCurrentWeekWithHours] = useState(
    getWeek(year, currentMonth)
  );
  const currentMonthIndex = useSelector(
    (state) => state.currentMonthIndex.currentMonthIndex
  );
  const addEventInfo = useSelector(
    (state) => state.currentMonthIndex.addEventInfo
  );
  const currentWeekDays=useSelector(state=>state.currentMonthIndex.currentWeek);
  const viewSmallCalendar = useSelector(
    (state) => state.currentMonthIndex.viewSmallCalendar
  );
  const SwitchedDay = useSelector(
    (state) => state.currentMonthIndex.currentDay
  );
  const [currentDay, setCurrentDay] = useState(
    getHoursForDay(year, currentMonthIndex, 0, SwitchedDay)
  );
  const CalendarView = useSelector(
    (state) => state.currentMonthIndex.calendarView
  );
  useEffect(() => {
    if(currentWeekDays===""){
      dispatch(handleChangeCurrentWeek(currentWeek));
    }
    if (CalendarView !== "today") {
      setCurrentMonth(getMonths(currentMonthIndex));
      setCurrentWeekWithHours(getWeek(year, currentMonthIndex,currentWeekDays));
    } else {
      setCurrentDay(getHoursForDay(year, currentMonthIndex, returnWeekIndex(currentDate), SwitchedDay));
    }
  }, [currentMonthIndex, year, nowDayMonth, CalendarView, SwitchedDay, currentWeekDays, dispatch, currentWeek, currentDate]);
  return (
    <Layout>
      <div className=" bg-slate-200 p-2 h-screen">
        <div className="mt-3 p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh] overflow-auto rounded-2xl xs:w-full xs:mx-1 md: w-3/4  md:mx-4" id="planning">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold pb-8">Planning</h3>
          </div>
          <div className="relative">
            <PlanningHeader />
            {CalendarView === "month" ? (
              <ShowDays currentMonth={currentMonth} />
            ) : CalendarView === "today" ? (
              <><ShowToDay currentDay={currentDay} /><SavePlanSchedule />
                <div
                  className={
                    addEventInfo ? "absolute top-[30vh] left-[30vw] duration-100" : "hidden"
                  }
                >
                  <AddBriefInfo  currentMonthIndex={currentMonthIndex}/>
                </div>
                </>
            ) : (
              <>
                <ShowWeeklyDays currentWeekWithHours={currentWeekWithHours} />
                <SavePlanSchedule />{" "}
                <div
                  className={
                    addEventInfo ? "absolute top-[30vh] left-[30vw] duration-100" : "hidden"
                  }
                >
                  <AddBriefInfo  currentMonthIndex={currentMonthIndex}/>
                </div>
              </>
            )}
            <div
              className={`bg-slate-400 w-[260px] h-[240px] rounded shadow absolute top-8 ${
                !viewSmallCalendar ? "hidden" : "rounded"
              } `}
            >
              <ShowSmallerCalDays currentMonth={currentMonth}  />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlanSchedule;
