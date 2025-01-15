import { TimetableEntry } from "../features/timetable/types";
import DayDetails from "./DayDetails";
import DayHeader from "./DayHeader";

export interface DayProps {
  scheduleEntires: TimetableEntry[];
}

function Day({ scheduleEntires }: DayProps) {
  return (
    <div className="border-4 border-[#E2D7F3] bg-pinktable-50 lg:rounded-none lg:rounded-b-xl rounded-b-xl shadow-md mb-3">
      <DayHeader date={scheduleEntires[0].date} weekDay={scheduleEntires[0].dayOfWeek}></DayHeader>
      <DayDetails scheduleEntires={scheduleEntires}></DayDetails>
    </div>
  );
}
export default Day;
