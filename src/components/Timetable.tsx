import { useEffect, useState } from "react";
import {
  addDaysToDateMonthSafe,
  getClosestWeekStartDay,
  getTodayData,
  parseToISOSstring,
  processTimeTableData,
} from "../utils/dateUtils";
import WeekView from "./WeekView";
import { TimetableResponse } from "../features/timetable/types";

import WeekNav from "./WeekNav";
import Loading from "./Loader";
import {
  fetchUserSchedule,
  FetchUserScheduleParams,
} from "../features/timetable/fetchUserSchedule";
import { HandleArrowWeekChange } from "./types";

export interface DateState {
  timeTableData?: TimetableResponse;
  selectedDate: Date;
  shouldDisplay: boolean;
}

function Timetable() {
  const { todayDate } = getTodayData();
  const [dateState, setDateState] = useState<DateState>({
    selectedDate: getClosestWeekStartDay(todayDate),
    timeTableData: undefined,
    shouldDisplay: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  //TODO it doesnt work coz after i set shoulDIsplayref to false in the weekday the useEffect is async or whatever
  // and it sets the  shouldsiplayRef.current = true at line 46, so the shoulddispay is only false when i set it in catch
  //error
  const closestWeekendStartDay = getClosestWeekStartDay(dateState.selectedDate);
  const closestWeekEndDay = addDaysToDateMonthSafe(closestWeekendStartDay, 6);

  useEffect(() => {
    const fetchTimeTableData = async () => {
      const todayParams: FetchUserScheduleParams = {
        limit: 0,
        start: 0,
        dateFrom: parseToISOSstring(closestWeekendStartDay),
        dateTo: parseToISOSstring(
          new Date(addDaysToDateMonthSafe(closestWeekendStartDay, 7))
        ),
      };
      try {
        const res = await fetchUserSchedule(todayParams);
        //TODO fix setting should display here
        setDateState((prev) => ({
          ...prev,
          timeTableData: res,
          shouldDisplay: true,
        }));
      } catch (error) {
        setDateState((prev) => ({ ...prev, shouldDisplay: false }));
        console.log(error);
      } finally {
        //TODO maybe have it here the sate chagne, useRef for the shouldDisplay dunno yet
        setIsLoading(false);
      }
    };

    // async function callItAsyncCozTheJsisLovley() {
    //   await fetchTimeTableData();
    // }
    // callItAsyncCozTheJsisLovley();
    fetchTimeTableData()
  }, [dateState.selectedDate]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!dateState.timeTableData) {
    return <h1>no timetable data for this week LOL</h1>;
  }
  const { timeTableEntries, fromDateClosestWeekDateKeys, } =
    processTimeTableData(dateState.timeTableData, dateState.selectedDate);

  const handleArrowWeekChange: HandleArrowWeekChange = (action) => {
    let newDate;
    if (action == "next") {
      newDate = addDaysToDateMonthSafe(closestWeekEndDay, 7);
    } else {
      newDate = addDaysToDateMonthSafe(closestWeekendStartDay, -7);
      // const unixStartWeek = new Date(closestWeekStartDay).setDate(
      //   closestWeekStartDay.getDate() - 7
      // );
      // newDate = new Date(unixStartWeek);
    }

    if (
      newDate.getTime() === closestWeekendStartDay.getTime() ||
      newDate.getTime() === closestWeekEndDay.getTime()
    ) {
      console.log("asa");
      setDateState((prev) => ({ ...prev, shouldDisplay: true }));
    } else {
      setDateState((prev) => ({ ...prev, shouldDisplay: false }));
    }
    // this reloades the state and the useEffect which resests shouldsiplayRef
    setDateState((prev) => ({ ...prev, selectedDate: newDate }));
  };

  return (
    <div className="lg:max-w-screen-2xl grid-rows-2 items-center justify-center self-center">
      <div className="grid grid-flow-col bg-pastelPinkBg-50 rounded-t-2xl shadow-lg ">
      {/* <div className="grid grid-flow-col bg-[#D0AEDF] rounded-t-2xl shadow-lg"> */}
        <WeekNav
          weekEndDay={closestWeekEndDay}
          weekStartDay={closestWeekendStartDay}
          handleDateChangeArrow={handleArrowWeekChange}
        ></WeekNav>
      </div>
      <WeekView
        displayDates={fromDateClosestWeekDateKeys}
        timeTableEntries={timeTableEntries}
        shouldDisplay={dateState.shouldDisplay}
      />
    </div>
  );
}

export default Timetable;