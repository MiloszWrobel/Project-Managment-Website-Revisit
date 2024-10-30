import { useRef } from "react";
import Input from "./Input";

export default function Project({ handleClick, onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    )
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
  }

  return (
    <section className="flex-1 p-8 text-stone-700 rounded-lg shadow-md flex flex-col mt-16 w-[35rem]">
      <div className="flex w-[35rem] mb-4 justify-end">
        <button
          className="px-4 py-2 mr-2 rounded-md bg-stone-100 text-stone-900"
          onClick={handleClick}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="space-y-4">
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </section>
  );
}
