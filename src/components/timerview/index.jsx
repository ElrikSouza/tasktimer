import Timer from "./timer";
import "./timerview.css";

export default function TimerView({
  currentTask = null,
  isTaskCompleted,
  onConfirmCompleteTask,
  onPauseResume,
  currentTimeInSeconds,
  areThereAnyTasks,
  isTimerPaused,
}) {
  return (
    <div className="timer_view">
      {currentTask && <h1 className="timer_view__name">{currentTask}</h1>}
      <Timer currentTimeInSeconds={currentTimeInSeconds} />

      {!areThereAnyTasks && <div>Add a task to begin using the app.</div>}

      {isTaskCompleted &&
        areThereAnyTasks && [
          <div>Add more time, or trasition to the next task</div>,
          <button onClick={onConfirmCompleteTask}>Next Task!</button>,
        ]}
      {areThereAnyTasks && (
        <div className="timer_view__controls">
          <button type="button" onClick={onPauseResume}>
            {isTimerPaused ? "Resume" : "Pause"}
          </button>
          <button type="button" onClick={onConfirmCompleteTask}>
            Finish Task
          </button>
        </div>
      )}
    </div>
  );
}
