import { ApiError, CustomApiError } from "../types";
import { TimetableResponse } from "./types";

export interface FetchUserScheduleParams {
  dateFrom: string;
  dateTo: string;
  start: number;
  limit: number;
}

export const fetchUserSchedule = async ({
  dateFrom,
  dateTo,
  start,
  limit,
}: FetchUserScheduleParams): Promise<TimetableResponse> => {
  const params = new URLSearchParams({
    dateFrom,
    dateTo,
    start: String(start),
    limit: String(limit),
  });

  const url = `http://localhost:8080/api/test?${params.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    const info = await response.json();
    throw new CustomApiError<ApiError>(
      "error while fetching user timeTable data",
      info,
      response.status
    );
  }

  return await response.json();
};
