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
    <div>
      <TheInput
        placeholder="Task name"
        onKeyDown={onEnterKeyPress}
        onChange={onChangeAddTaskValue}
        value={addTaskValue}
      />
      <div className="tasklist">
        {tasks.map((task) => {
          return (
            <div className="tasklist-item" key={task.id}>
              {task.name}
              <button type="button" onClick={() => onDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
