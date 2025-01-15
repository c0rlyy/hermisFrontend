import WeekDay from "./WeekDay";

export interface DayHeader {
  date: string;
  weekDay: string;
}

function DayHeader({ date, weekDay }: DayHeader) {
  return (
    <div className="gap-3 ">
      <div className="text-xl text-center flex justify-center text-gray-600">
        <WeekDay dayOfWeek={weekDay} date={date}></WeekDay>
      </div>
    </div>
  );
}

export default DayHeader;
