import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import { HandleArrowWeekChange } from "./types";

export interface WeekNavProps {
  weekStartDay: Date;
  weekEndDay: Date;
  handleDateChangeArrow: HandleArrowWeekChange;
}

export const dateParserTrim = (date: Date): string => {
  const parsedDate = date.toLocaleString();
  const trimmedDate = parsedDate.split(",")[0].trim();
  return trimmedDate;
};

function WeekNav({
  weekStartDay,
  weekEndDay,
  handleDateChangeArrow,
}: WeekNavProps) {
  const trimmedDate = dateParserTrim(weekStartDay);
  const trimmedEndDate = dateParserTrim(weekEndDay);
  return (
    <>
      <LeftArrow onClick={() => handleDateChangeArrow("previous")}></LeftArrow>
      <h1 className="text-lg font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 text-[#ffc484] justify-self-center">
        {trimmedDate}-{trimmedEndDate}
      </h1>
      <RightArrow onClick={() => handleDateChangeArrow("next")}></RightArrow>
    </>
  );
}

export default WeekNav;
