import { useEffect, useState } from "react";
import TaskList from "./components/tasklist";
import "./App.css";
import TimerView from "./components/timerview";
import { loadTasks, saveTasks } from "./utils/tasks";
import { usePageWidth } from "./components/hooks/use-pagewidth";
import TaskListContainier from "./components/tasklist/container";
import { loadTimer, saveTimer } from "./utils/timer";
import { useBeforeUnload } from "./components/hooks/usebeforeunload";

function App() {
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(loadTimer());
  const [isTimerActive, setTimerActive] = useState(true);
  const [taskArray, setTaskArray] = useState(loadTasks());
  const [taskName, setTaskName] = useState("");
  const { width } = usePageWidth();

  useEffect(() => {
    const timer = setTimeout(
      () =>
        isTimerActive &&
        currentTimeInSeconds > 0 &&
        taskArray.length > 0 &&
        setCurrentTimeInSeconds(currentTimeInSeconds - 1),
      1000
    );

    return () => clearTimeout(timer);
  });

  const saveCurrentTime = () => saveTimer(currentTimeInSeconds);
  useBeforeUnload(saveCurrentTime);

  const maxId = () => {
    if (taskArray.length === 0) {
      return 0;
    }

    return taskArray[taskArray.length - 1].id;
  };

  const onSubmit = () => {
    if (taskArray.length === 0) {
      setCurrentTimeInSeconds(1800);
    }

    const newTaskArray = [
      ...taskArray,
      { name: taskName, id: maxId(taskArray) + 1 },
    ];

    setTaskArray(newTaskArray);
    setTaskName("");
    saveTasks(newTaskArray);
  };

  const onChange = (event) => {
    setTaskName(event.target.value);
  };

  const onPauseResume = () => {
    setTimerActive(!isTimerActive);
  };

  const popAndMoveOn = () => {
    const [, ...rest] = taskArray;
    setTaskArray(rest);
    setCurrentTimeInSeconds(1800);
    saveTasks(rest);
  };

  const onDeleteTask = (taskId) => {
    if (taskArray[0].id === taskId) {
      setCurrentTimeInSeconds(1800);
    }

    const newTaskArray = taskArray.filter((task) => task.id !== taskId);
    setTaskArray(newTaskArray);
    saveTasks(newTaskArray);
  };

  return (
    <div className="App">
      <TimerView
        currentTimeInSeconds={currentTimeInSeconds}
        isTaskCompleted={currentTimeInSeconds === 0}
        areThereAnyTasks={taskArray.length > 0}
        onConfirmCompleteTask={popAndMoveOn}
        onPauseResume={onPauseResume}
        isTimerPaused={!isTimerActive}
        currentTask={taskArray[0] == null ? null : taskArray[0].name}
      />

      <TaskListContainier width={width}>
        <TaskList
          tasks={taskArray}
          onSubmit={onSubmit}
          addTaskValue={taskName}
          onChangeAddTaskValue={onChange}
          onDeleteTask={onDeleteTask}
        />
      </TaskListContainier>
    </div>
  );
}

export default App;
