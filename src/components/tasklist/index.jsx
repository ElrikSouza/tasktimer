import { useOnEnterKeyPress } from "../hooks/use-onenterkeypress";
import TheInput from "../input";
import "./tasklist.css";

export default function TaskList({
  tasks,
  addTaskValue,
  onChangeAddTaskValue,
  onSubmit,
  onDeleteTask,
}) {
  const onEnterKeyPress = useOnEnterKeyPress(onSubmit);

  return (
    <div className="tasklist-container">
      <div className="tasklist">
        <div>
          <TheInput
            placeholder="Task name"
            onKeyDown={onEnterKeyPress}
            onChange={onChangeAddTaskValue}
            value={addTaskValue}
          />
          <button
            type="button"
            onClick={onSubmit}
            disabled={addTaskValue === ""}
          >
            Add Task
          </button>
        </div>
        {tasks.map((task) => {
          return (
            <div className="tasklist-item" key={task.id}>
              {task.name}
              <button
                className="delete-task-btn"
                type="button"
                onClick={() => onDeleteTask(task.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
