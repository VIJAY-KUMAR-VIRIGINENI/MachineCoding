import { FC, useState } from "react";
import "./style.css";

import TaskList from "./TaskList";

interface todoItem {
  text: string;
  completed: boolean;
}

const ToDo: FC = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<todoItem[]>([]);
  const [isEditing, setEditing] = useState(false);
  const [editIndex, setIndex] = useState<number | null>(null);
  const handleClick = () => {
    if (text !== "") {
      const task = text.trim();

      if (isEditing == true && editIndex != null) {
        const updatedTodo = todoList.map((item, index) =>
          index === editIndex ? { ...item, text: task } : item
        );

        setTodoList(updatedTodo);
        setEditing(false);
        setIndex(null);
      } else {
        const newTask: todoItem = { text: text, completed: false };
        setTodoList([...todoList, newTask]);
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
    setText(todoList[indx].text);
  };
  const handleComplete = (indx: number) => {
    const updatedTodoList = todoList.map((item, idx) =>
      indx === idx ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodoList);
  };
  return (
    <div className="container">
      <div className="input">
        <input
          id="todoTask"
          value={text}
          placeholder="enter a task"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => handleClick()}>Save</button>
      </div>

      <TaskList
        itemList={todoList}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default ToDo;
