import { Checkbox } from "../ui/checkbox";

type Props = {
  title: string;
  completed: boolean;
};

export default function NoteInfo({ title, completed }: Props) {
  return (
    <div className="flex items-center">
      <h1 className="mr-4">{title}</h1>
      <Checkbox checked={completed} />
    </div>
  );
}
