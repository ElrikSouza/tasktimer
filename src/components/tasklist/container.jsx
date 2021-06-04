const DUAL_VIEW_THRESHOLD = 800;

function Drawer({ isVisible, children }) {
  return <div>{children}</div>;
}

export default function TaskListContainier({ width, children }) {
  return (
    <>
      {width >= DUAL_VIEW_THRESHOLD ? (
        <div className="taskview">{children}</div>
      ) : (
        <Drawer>{children}</Drawer>
      )}
    </>
  );
}
