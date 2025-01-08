import useDate from "../../hooks/use-date";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function NoteForm() {
  const { date, daysOfWeek, monthAndYear } = useDate();

  return (
    <div className="mt-10">
      <div>
        <h1 className="font-bold">Your next note will be 📝</h1>
      </div>

      <div className="mt-6 space-y-2">
        <Input type="text" placeholder="Note title" />
        <Textarea placeholder="Type your message here." />
      </div>

      <div className="mt-10">
        <h3 className="text-sm text-gray-400">
          {date} {daysOfWeek} {monthAndYear.month} {monthAndYear.year}
        </h3>
      </div>
    </div>
  );
}
