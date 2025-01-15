import { TimetableEntry } from "../features/timetable/types";
import Day from "./Day";
import { EmptyWeek } from "./EmptyWeek";
import { DateKey } from "./types";

interface WeekViewProps {
  timeTableEntries: Record<DateKey, TimetableEntry[]>;
  displayDates: DateKey[];
  shouldDisplay: boolean;
}

function WeekView({
  timeTableEntries,
  displayDates,
  shouldDisplay,
}: WeekViewProps) {
  if (!shouldDisplay) {
    return (
      <div className="h-">
        <EmptyWeek></EmptyWeek>
      </div>
    );
  }

  // return (
  //   <div className="grid sm:grid-flow-col gap-2 auto-cols-fr"></div>
  return (
    <div className="lg:grid grid-flow-col gap-2 auto-cols-fr ">
      {displayDates.map((date, index) => (
        <Day key={index} scheduleEntires={timeTableEntries[date]} />
      ))}
    </div>
  );
}

export default WeekView;
