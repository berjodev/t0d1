import { useLocalStorage } from "usehooks-ts";
import NoteInfo from "../NoteInfo";

export default function Notes() {
  const [notes] = useLocalStorage("notes", []);
  return (
    <div className="flex flex-col">
      {notes.map(({ title, completed }) => (
        <NoteInfo title={title} completed={completed} />
      ))}
    </div>
  );
}
