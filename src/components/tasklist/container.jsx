import TaskListDrawer from "./tasklist-drawer";

const DUAL_VIEW_THRESHOLD = 800;

export default function TaskListContainier({ width, children }) {
  return (
    <>
      {width >= DUAL_VIEW_THRESHOLD ? (
        <div className="taskview">{children}</div>
      ) : (
        <TaskListDrawer>{children}</TaskListDrawer>
      )}
    </>
  );
}
