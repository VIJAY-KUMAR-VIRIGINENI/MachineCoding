import { FC, useState, ChangeEvent, FormEvent } from "react";
import "./style.css";

interface FitnessTask {
  goal: string;
  category: string;
  rep: string;
  archived?: boolean;
}

const FitnessTracker: FC = () => {
  const [goal, setGoal] = useState(""); // Fitness goal text
  const [activity, setActivity] = useState(""); // Category (e.g., Strength Training, Cardio)
  const [details, setDetails] = useState(""); // Repetitions or Duration
  const [tasks, setTasks] = useState<FitnessTask[]>([]);

  const handleGoalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const handleActivityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setActivity(e.target.value);
  };

  const handleDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails(e.target.value);
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (!goal || !activity || !details) return;

    const newTask: FitnessTask = {
      goal,
      category: activity,
      rep: details,
      archived: false,
    };

    setTasks([...tasks, newTask]);

    setGoal("");
    setActivity("");
    setDetails("");
  };

  const handleArchive = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, archived: !task.archived } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h3>Fitness Goal Tracker</h3>
      <form>
        <div className="form-group">
          <label>
            Fitness Goal
            <input
              type="text"
              placeholder="Enter Fitness Goal"
              value={goal}
              onChange={handleGoalChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Category
            <select value={activity} onChange={handleActivityChange}>
              <option value="" disabled>
                Select Category
              </option>
              <option value="Strength Training">Strength Training</option>
              <option value="Cardio">Cardio</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          {activity && activity !== "Cardio" ? (
            <label>
              Repetitions
              <input
                type="text"
                placeholder="Enter number of reps"
                value={details}
                onChange={handleDetailsChange}
              />
            </label>
          ) : (
            <label>
              Enter Duration
              <input
                type="text"
                placeholder="Enter duration in minutes"
                value={details}
                onChange={handleDetailsChange}
              />
            </label>
          )}
        </div>

        <button type="submit" onClick={handleClick}>
          Add Goal
        </button>
      </form>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <div className={task.archived ? "archived" : ""}>
              <p>
                <strong>Goal:</strong> {task.goal}
              </p>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>
                  {task.category !== "Cardio" ? "Repetitions" : "Duration"}:
                </strong>{" "}
                {task.rep}
              </p>
            </div>
            <button onClick={() => handleArchive(index)}>
              {task.archived ? "Unarchive" : "Archive"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTracker;
