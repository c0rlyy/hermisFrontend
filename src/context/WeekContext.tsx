// import { createContext, useContext, useEffect, useState } from "react";
// import Loading from "../components/Loader";
// import { DateKey } from "../components/types";
// import { TimetableEntry } from "../features/timetable/types";
// import {
//   getClosestWeekStartDay,
//   getTodayData,
//   processTimeTableData,
// } from "../utils/dateUtils";
// import {
//   fetchUserSchedule,
//   FetchUserScheduleParams,
// } from "../features/timetable/fetchUserSchedule";

// export interface WeekContextProps {
//   selectedDate: Date;
//   weekEndDate: Date;
//   weekStartDate: Date;
//   allFoundDateEntries: Record<DateKey, TimetableEntry[]>;
//   selectedWeekKeys: DateKey[];
//   setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
// }

// export interface MyProviderProps {
//   children: React.ReactNode;
// }

// const WeekContext = createContext<WeekContextProps | null>(null);

// export function WeekProvider({ children }: MyProviderProps) {
//   const { todayDate } = getTodayData();
//   const [selectedDate, setSelectedDate] = useState<Date>(todayDate);
//   const [entries, setEntries] = useState<Record<DateKey, TimetableEntry[]>>({});
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTimeTableData = async () => {
//       try {
//         setIsLoading(true);
//         const from = getClosestWeekStartDay(selectedDate);
//         let dateTo = new Date(selectedDate);
//         dateTo.setDate(selectedDate.getDate() + 30);
//         const params: FetchUserScheduleParams = {
//           dateFrom: from.toISOString().split("T")[0],
//           dateTo: dateTo.toISOString().split("T")[0],
//           limit: 0,
//           start: 0,
//         };
//         const res = await fetchUserSchedule(params);
//         const { fromDateClosestWeekDateKeys, fromDateWeekStartDay } =
//           processTimeTableData(res, from);

//         setSelectedDate(fromDateWeekStartDay);
//         setEntries(res.timeTableEntries);
//       } catch (error) {
//         console.error("Error fetching timetable data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTimeTableData();
//   }, [selectedDate]);

//   if (isLoading) {
//     return <Loading message="Loading..."></Loading>;
//   }

//   return (
//     <WeekContext.Provider
//       value={{
//         selectedDate,
//         weekEndDate: new Date(selectedDate),
//         allFoundDateEntries: entries,
//         setSelectedDate,
//       }}
//     >
//       {children}
//     </WeekContext.Provider>
//   );
// }

// export const useWeek = (): WeekContextProps => {
//   const context = useContext(WeekContext);
//   if (!context) {
//     throw new Error("useWeek must be used within a WeekProvider");
//   }
//   return context;
// };
