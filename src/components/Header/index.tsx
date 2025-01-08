import { ArrowLeft, Calendar } from "lucide-react";
import useDate from "../../hooks/use-date";
import { useLocation } from "wouter";
import { Button } from "../ui/button";

const isOnCreateForm = (location: string) => location === "/create";

export default function Header() {
  const { date, daysOfWeek, monthAndYear } = useDate();
  const [location] = useLocation();

  if (isOnCreateForm(location)) {
    return (
      <div className="w-full flex justify-between">
        <Button variant="link">
          <ArrowLeft /> Notes
        </Button>

        <Button>Save</Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex">
          <h2 className="font-bold text-3xl">{date}</h2>
          <div className="pl-5">
            <h3 className="text-gray-500">{daysOfWeek}</h3>
            <h3 className="text-gray-500">
              {monthAndYear.month}, {monthAndYear.year}
            </h3>
          </div>
        </div>
        <Calendar size={40} />
      </div>
    </div>
  );
}
