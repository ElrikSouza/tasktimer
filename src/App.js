import TaskList from "./components/tasklist";
import TimerView from "./components/timerview";
import { usePageWidth } from "./components/hooks/use-pagewidth";
import TaskListContainier from "./components/tasklist/container";
import { useTimer } from "./components/hooks/use-timer";
import { useFormField } from "./components/hooks/use-form-field";
import { useTasks } from "./components/hooks/use-tasks";
import "./App.css";

function App() {
  const { tasks, addNewTask, removeFirstTask, removeTaskById } = useTasks();

  const {
    value: taskName,
    onChange: onChangeTaskname,
    clear: clearTaskName,
  } = useFormField();

  const { width } = usePageWidth();

  const getNumberOfTasks = () => tasks.length;

  const { timeInSeconds, isTimerPaused, onPauseResume, resetTimer } =
    useTimer(getNumberOfTasks);

  const onSubmit = () => {
    if (tasks.length === 0) {
      resetTimer();
    }

    addNewTask(taskName);
    clearTaskName();
  };

  const popAndMoveOn = () => {
    removeFirstTask();
    resetTimer();
  };

  const onDeleteTask = (taskId) => {
    if (tasks[0].id === taskId) {
      resetTimer();
    }

    removeTaskById(taskId);
  };

  return (
    <div className="App">
      <TimerView
        currentTimeInSeconds={timeInSeconds}
        isTaskCompleted={timeInSeconds === 0}
        areThereAnyTasks={tasks.length > 0}
        onConfirmCompleteTask={popAndMoveOn}
        onPauseResume={onPauseResume}
        isTimerPaused={isTimerPaused}
        currentTask={tasks[0] == null ? null : tasks[0].name}
      />

      <TaskListContainier width={width}>
        <TaskList
          tasks={tasks}
          onSubmit={onSubmit}
          addTaskValue={taskName}
          onChangeAddTaskValue={onChangeTaskname}
          onDeleteTask={onDeleteTask}
        />
      </TaskListContainier>
    </div>
  );
}

export default App;
