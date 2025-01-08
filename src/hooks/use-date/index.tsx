import { daysOfWeekMap, monthsMap } from "./constants";

const date = new Date();

export default function useDate(): any {
  return {
    date: date.getDate(),
    daysOfWeek: daysOfWeekMap[date.getDay()],
    monthAndYear: {
      month: monthsMap[date.getMonth()],
      year: date.getFullYear(),
    },
  };
}
