// Type for individual timetable entries
export interface TimetableEntry {
  lecturer: string;
  subject: string;
  courseType: string;
  hoursCount: string;
  date: string;
  startTime: string;
  endTime: string;
  roomName: string;
  location: string;
  fieldOfStudy: string;
  mode: string;
  notes: string;
  topic: string;
  specialization: string;
  group: string;
  faculty: string;
  dayOfWeek: string;
}

// export interface timeTableEntries{
//   {data:}
// }

export interface TimetableResponse {
  status: string;
  totalResultCount: number;
  success: boolean;
  fail: boolean;
  timeTableEntries: Record<string, TimetableEntry[]>;
}
