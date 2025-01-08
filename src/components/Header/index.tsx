import useDate from "../../hooks/use-date";

export default function Header() {
  const { date, dayOfTheWeek, monthAndYear } = useDate();

  return (
    <div className="w-full">
      <div className="flex">
        <h2 className="font-bold text-3xl">{date}</h2>
        <div className="pl-5">
          <h3 className="text-gray-500">{dayOfTheWeek}</h3>
          <h3 className="text-gray-500">
            {monthAndYear.month}, {monthAndYear.year}
          </h3>
        </div>
      </div>
    </div>
  );
}
