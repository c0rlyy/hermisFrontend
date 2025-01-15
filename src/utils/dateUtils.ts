import { number } from "prop-types";
import { DateKey } from "../components/types";
import { TimetableEntry, TimetableResponse } from "../features/timetable/types";

export interface TodayData {
  todayStr: DateKey;
  todayDate: Date;
}

export interface ProccesedTimeTableData {
  timeTableEntries: Record<DateKey, TimetableEntry[]>;
  fromDateWeekStartDay: Date;
  fromDateWeekEndDay: Date;
  fromDateClosestWeekDateKeys: DateKey[];
}

export const getWeekStartEndDates = (fromDay: Date) => {
  const closestWeekStartDay = getClosestWeekStartDay(fromDay);
  const closestWeekEndDay = new Date(closestWeekStartDay);
  closestWeekEndDay.setDate(closestWeekStartDay.getDate() + 6);
  return { closestWeekStartDay, closestWeekEndDay };
};

export const processTimeTableData = (
  data: TimetableResponse,
  fromDate: Date
): ProccesedTimeTableData => {
  const timeTableEntries = data.timeTableEntries;
  const dateKeys: DateKey[] = Object.keys(timeTableEntries);

  const sortedDateKeys = sortDateKeys(dateKeys);
  const closestDate = getClosestDate(sortedDateKeys, fromDate);

  const closestDateObj = new Date(closestDate);
  const fromDateWeekStartDay = getClosestWeekStartDay(closestDateObj);
  // const fromDateWeekEndDay = new Date(fromDateWeekStartDay);
  // fromDateWeekEndDay.setDate(fromDateWeekStartDay.getDate() + 6);

  const n = new Date(fromDateWeekStartDay).setDate(
    fromDateWeekStartDay.getDate() + 6
  );
  const fromDateWeekEndDay = new Date(n);

  const fromDateClosestWeekDateKeys = getClosestWeekDatesKeys(
    dateKeys,
    fromDateWeekStartDay
  );

  return {
    timeTableEntries,
    fromDateWeekStartDay,
    fromDateWeekEndDay,
    fromDateClosestWeekDateKeys,
  };
};

export const getClosestWeekDatesKeys = (
  allDates: DateKey[],
  currentWeekStartDate: Date
): DateKey[] => {
  const thisWeekDatesKeys = allDates.filter((date: string) => {
    const numberOfDaysInWeek = 6;

    const unixStartWeek = currentWeekStartDate.getTime();
    const unixEndWeek = new Date(currentWeekStartDate).setDate(
      currentWeekStartDate.getDate() + numberOfDaysInWeek
    );
    // const t = new Date(currentWeekStartDate).setDate(
    //   currentWeekStartDate.getDate() + numberOfDaysInWeek
    // );
    // const a = new Date(t)
    // console.log(a);

    const currDate = new Date(date).getTime();
    return currDate >= unixStartWeek && currDate <= unixEndWeek;
  });

  return thisWeekDatesKeys;
};

export const getClosestWeekStartDay = (fromDay: Date) => {
  const currentWeekStartDate = new Date(fromDay).setDate(
    fromDay.getDate() - fromDay.getDay()
  );
  const n = new Date(currentWeekStartDate);
  // currentWeekStartDate.setDate(fromDay.getDate() - fromDay.getDay());
  // console.log("this is week star");
  // console.log(currentWeekStartDate);
  // console.log(n)
  return n;
};

export const getTodayData = (): TodayData => {
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  return { todayStr: today.toISOString().slice(0, 19) + "Z", todayDate: today };
};

// dont like mutating arrays so i make a copy
export const sortDateKeys = (dateKeys: DateKey[]): DateKey[] => {
  const temp = [...dateKeys];
  const sortedDates = temp.sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  return sortedDates;
};

export const getClosestDate = (
  sortedDateKeys: DateKey[],
  today: Date
): DateKey => {
  const closestDate = sortedDateKeys.reduce((prev, curr) => {
    const prevDiff = Math.abs(new Date(prev).getTime() - today.getTime());
    const currDiff = Math.abs(new Date(curr).getTime() - today.getTime());
    return currDiff < prevDiff ? curr : prev;
  });
  return closestDate;
};

export const addDaysToDateMonthSafe = (
  date: Date ,
  days: number
): Date => {
  const newDate = new Date(date).setDate(date.getDate()+days);
  return new Date(newDate);
};

export const parseToISOSstring = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
