export interface DayBlockProps {
  subject: string;
  timeFrom: string;
  timeEnd: string;
  room: string;
  lecturer: string;
  notes: string;
}

function DayBlock({
  subject,
  timeFrom,
  timeEnd,
  room,
  lecturer,
  notes,
}: DayBlockProps) {
  const timeFromD = new Date(timeFrom);
  const fullTimeFromH = timeFromD.getUTCHours();
  const fullTimeFromM = timeFromD.getUTCMinutes().toString().padStart(2, "0");

  const timeEndD = new Date(timeEnd);
  const fullTimeEndH = timeEndD.getUTCHours();
  // better than alternatives
  const fullTimeEndM = timeEndD.getUTCMinutes().toString().padStart(2, "0");

  return (
    <div className="border rounded-lg p-4 bg-purple-100 shadow">
      <p className="text-lg font-semibold break-words whitespace-normal">
        {subject}
      </p>
      <p className="text-gray-800 break-words whitespace-normal">
        {fullTimeFromH}:{fullTimeFromM}-{fullTimeEndH}:{fullTimeEndM}
      </p>
      <p className="text-gray-600 break-words whitespace-normal">Sala {room}</p>
      <p className="text-gray-600 break-words whitespace-normal">{lecturer}</p>
      {notes && (
        <p className="text-sm text-gray-500 italic break-words whitespace-normal">
          {notes}
        </p>
      )}
    </div>
  );
}

export default DayBlock;
