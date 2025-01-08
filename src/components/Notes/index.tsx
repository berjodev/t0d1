import { useLocalStorage } from "usehooks-ts";
import NoteInfo from "../NoteInfo";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useLocation } from "wouter";

export default function Notes() {
  const [notes] = useLocalStorage("notes", []);
  const [_, navigate] = useLocation();

  return (
    <div className="flex flex-col">
      {notes.map(({ title, completed }) => (
        <NoteInfo title={title} completed={completed} />
      ))}
      <div className="absolute bottom-5 right-5">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12"
          onClick={() => navigate("/create")}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
