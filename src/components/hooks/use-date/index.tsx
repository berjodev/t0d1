import { daysOfWeek, months } from "./constants";

type Props = {
  getInfo: "dayOfTheMonth" | "dayOfTheWeek" | "monthYear";
};

const date = new Date();

export default function useDate({ getInfo }: Props): any {
  if (getInfo === "dayOfTheMonth") return date.getDate();

  if (getInfo === "dayOfTheWeek") return daysOfWeek[date.getDay()];

  if (getInfo === "monthYear")
    return {
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };

  return "";
}
