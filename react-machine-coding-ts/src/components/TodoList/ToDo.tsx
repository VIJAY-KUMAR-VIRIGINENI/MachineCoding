import { FC, useState } from "react";

import TaskList from "./TaskList";

const ToDo: FC = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [isEditing, setEditing] = useState(false);
  const [editIndex, setIndex] = useState<number | null>(null);
  const handleClick = () => {
    if (text !== "") {
      const task = text.trim();

      if (isEditing == true && editIndex != null) {
        todoList[editIndex] = task;
        setEditing(false);
        setIndex(null);
      } else {
        setTodoList([...todoList, task]);
      }
      setText("");
    }
  };
  const handleDelete = (indx: number) => {
    setTodoList(todoList.filter((_, index) => indx !== index));
  };
  const handleEdit = (indx: number) => {
    setEditing(true);
    setIndex(indx);
    setText(todoList[indx]);
  };
  const handleComplete = (indx: number) => {};
  return (
    <>
      <input
        id="todoTask"
        value={text}
        placeholder="enter a task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleClick()}>Save</button>
      <TaskList
        itemList={todoList}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onComplete={handleComplete}
      />
    </>
  );
};

export default ToDo;
