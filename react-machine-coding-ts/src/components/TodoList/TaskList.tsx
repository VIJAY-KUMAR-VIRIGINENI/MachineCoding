import { FC } from "react";

interface todoItem {
  text: string;
  completed: boolean;
}
interface TaskListProp {
  itemList: todoItem[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onComplete: (index: number) => void;
}

const TaskList: FC<TaskListProp> = ({
  itemList,
  onDelete,
  onEdit,
  onComplete,
}) => {
  return (
    <>
      <ul>
        {itemList.map((item, ind) => (
          <li
            key={ind}
            style={{
              textDecoration: item.completed === true ? "line-through" : "none",
              
            }}
          >
            {item.text} <button onClick={() => onDelete(ind)}>delete</button>
            <button onClick={() => onEdit(ind)}>Edit</button>
            <button onClick={() => onComplete(ind)}>Complete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
