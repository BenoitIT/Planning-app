/* eslint-disable react-refresh/only-export-components */
import dayjs from "dayjs";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentMonthIndex: dayjs().month(),
  calendarView:'week',
  currentDay: dayjs().day(),
  viewSmallCalendar:false,
  addMoreEventInfo: false,
  addEventInfo:false,
  selectedEventHour:"",
  selectedEventDate:"",
  currentWeek:"",
};

export const CurrentMonthSlice = createSlice({
  name: "currentMonthIndex",
  initialState,
  reducers: {
    handleSetCurrentMonth: (state, action) => {
      return {
        ...state,
        currentMonthIndex: action.payload,
      };
    },
    handleSetCalendarView: (state, action) => {
      return {
        ...state,
        calendarView: action.payload,
      };
    },
    handleSetDayView: (state, action) => {
      return {
        ...state,
        currentDay: action.payload,
      };
    },
     handleSetViewSmall: (state, action) => {
      return {
        ...state,
        viewSmallCalendar: action.payload,
      };
    },
    handleAddMoreEventInfo: (state, action) => {
      return {
        ...state,
        addMoreEventInfo: action.payload,
      };
    },
    handleAddEventInfo: (state, action) => {
      return {
        ...state,
        addEventInfo: action.payload,
      };
    },
    handleChangeCurrentWeek: (state, action) => {
      return {
        ...state,
        currentWeek: action.payload,
      };
    },
    handleAddEventTimingInfo: (state, action) => {
      return {
        ...state,
        selectedEventHour: action.payload.hour,
        selectedEventDate: action.payload.day,
      };
    },
  },
});

export const { handleSetCurrentMonth,handleSetCalendarView,handleSetDayView,handleSetViewSmall,handleAddMoreEventInfo,handleAddEventInfo,handleAddEventTimingInfo,handleChangeCurrentWeek } = CurrentMonthSlice.actions;
export default CurrentMonthSlice.reducer;