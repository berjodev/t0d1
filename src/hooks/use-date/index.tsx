import { daysOfWeek, months } from "./constants";

const date = new Date();

export default function useDate(): any {
  return {
    date: date.getDate(),
    daysOfWeek: daysOfWeek[date.getDay()],
    monthAndYear: { month: months[date.getMonth()], year: date.getFullYear() },
  };
}
