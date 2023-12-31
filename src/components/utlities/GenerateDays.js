import dayjs from "dayjs";

export const getMonths = (month = dayjs().month()) => {
  const year = dayjs().year();
  const FirstDayOfMonth = dayjs(new Date(year, month)).day();
  let currentMonthCount = 0 - FirstDayOfMonth;

  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return dayMatrix;
};


export const getWeek = (year, month,dayBlock) => {
  const FirstDayOfMonth = dayjs(new Date(year, month,dayBlock));
  const firstDayOfWeek = FirstDayOfMonth.subtract(FirstDayOfMonth.day(), 'day');
  const weekWithHours = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = firstDayOfWeek.add(i, 'day');
    const dailyHours = [];
    for (let hour = 0; hour < 24; hour++) {
      const timeString = currentDay.hour(hour).format('HH:mm');
      dailyHours.push(timeString);
      if (hour < 23) {
        const halfHourString = currentDay.hour(hour).minute(30).format('HH:mm');
        dailyHours.push(halfHourString);
      }
    }
    weekWithHours.push({ date: currentDay, hours: dailyHours });
  }
  return weekWithHours;
};

export const getHoursForDay = (year, month, weekIndex, dayOfWeek) => {
  const FirstDayOfMonth = dayjs(new Date(year, month, 1));
  const firstDayOfWeek = FirstDayOfMonth.subtract(FirstDayOfMonth.day(), 'day');
  const targetDay = firstDayOfWeek.add(weekIndex * 7 + dayOfWeek, 'day');
  const dailyHours = [];
  for (let hour = 0; hour < 24; hour++) {
    const timeString = targetDay.hour(hour).format('HH:mm');
    dailyHours.push(timeString);

    if (hour < 23) {
      const halfHourString = targetDay.hour(hour).minute(30).format('HH:mm');
      dailyHours.push(halfHourString);
    }
  }
  return { date: targetDay, hours: dailyHours };
};

export const DetectCurrentWeek=(currentDate)=>{
const startOfMonth = currentDate.startOf('month');
  const daysSinceStartOfMonth = currentDate.diff(startOfMonth, 'day');
  const weeksInBlocks = Math.floor(daysSinceStartOfMonth / 7) + 1;
  let result;
  if (weeksInBlocks === 1) {
    result = 7;
  } else if (weeksInBlocks === 2) {
    result = 14;
  } else if (weeksInBlocks === 3) {
    result = 21;
  } else if (weeksInBlocks === 4) {
    result = 29;
  } else {
    result = 0; 
  }
  return result-7;
}

export const returnWeekIndex=(currentDate)=>{
  const startOfMonth = currentDate.startOf('month');
  const daysSinceStartOfMonth = currentDate.diff(startOfMonth, 'day');
  const weeksInBlocks = Math.floor(daysSinceStartOfMonth / 7) + 1;
  return weeksInBlocks
}