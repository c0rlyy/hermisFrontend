interface WeekDayProps {
  dayOfWeek: string;
  date: string;
}

const days = {
  Sunday: "niedziela",
  Monday: "poniedziałek",
  Tuesday: "wtorek",
  Wednesday: "środa",
  Thursday: "czwartek",
  Friday: "piątek",
  Saturday: "sobota",
};

function WeekDay({ dayOfWeek, date }: WeekDayProps) {
  const d = new Date(date);
  const parsedDate = d.toLocaleString();
  const trimmedDate = parsedDate.split(",")[0].trim();
  const plDayOfWeek:string = days[dayOfWeek] ;
  return (
    <div>
      <h1>{plDayOfWeek}</h1>
      <h3 className="text-base text-blue-400">{trimmedDate}</h3>
    </div>
  );
}

export default WeekDay;
