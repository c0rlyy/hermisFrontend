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
  const plDayOfWeek: string = days[dayOfWeek];
  return (
    <div>
      <h1 className="text-purple-300 font-mono font-bold">{plDayOfWeek}</h1>
      <h3 className="text-base text-pastelRose-50 font-mono">{trimmedDate}</h3>
    </div>
  );
}

export default WeekDay;
