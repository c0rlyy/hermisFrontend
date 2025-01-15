import { TimetableEntry } from "../features/timetable/types";
import DayBlock from "./DayBlock";

export interface DayDetailProps {
  scheduleEntires: TimetableEntry[];
}

function DayDetail({ scheduleEntires }: DayDetailProps) {
  return (
    <div className="space-y-4 m-1">
      {scheduleEntires.map((item, index) => (
        <DayBlock
          key={index}
          subject={item.subject}
          timeFrom={item.startTime}
          timeEnd={item.endTime}
          room={item.roomName}
          lecturer={item.lecturer}
          notes={item.notes}
        />
      ))}
    </div>
  );
}

export default DayDetail;
