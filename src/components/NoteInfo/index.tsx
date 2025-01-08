import { Checkbox } from "../ui/checkbox";

type Props = {
  title: string;
  completed: boolean;
};

export default function NoteInfo({ title, completed }: Props) {
  return (
    <div className="flex">
      <h1>{title}</h1>
      <Checkbox checked={completed} />
    </div>
  );
}
