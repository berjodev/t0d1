import useDate from "../hooks/use-date";

export default function Header() {
  const day = useDate({ getInfo: "dayOfTheMonth" });
  const dayOfTheWeek = useDate({ getInfo: "dayOfTheWeek" });
  const monthYear = useDate({ getInfo: "monthYear" });

  return (
    <div className="w-full">
      <div className="flex">
        <h2 className="font-bold text-3xl">{day}</h2>
        <div className="pl-5">
          <h3 className="text-gray-500">{dayOfTheWeek}</h3>
          <h3 className="text-gray-500">
            {monthYear.month}, {monthYear.year}
          </h3>
        </div>
      </div>
    </div>
  );
}
