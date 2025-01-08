import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function NoteForm() {

  return (
    <div>
      <div>
        <h1>Your next note will be 📝</h1>
      </div>

      <div>
        <Input type="text" placeholder="Note title" />
        <Textarea placeholder="Type your message here." />
      </div>

      <div>

      </div>
    </div>
  );
}
