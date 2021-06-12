import { useState } from "react";
import { joinClassname } from "../../utils/classname";

export default function TaskListDrawer({ children }) {
  const [isVisible, setVisibility] = useState(false);
  const drawerState = isVisible ? "drawer--open" : "";
  const className = joinClassname("drawer", drawerState);
  const showDrawer = () => setVisibility(true);
  const closeDrawer = () => setVisibility(false);

  return (
    <>
      <button className="show-tasklist-btn" onClick={showDrawer}>
        Show task list
      </button>
      <div className={className}>
        <button className="close-tasklist-drawer" onClick={closeDrawer}>
          Close Task list
        </button>
        {children}
      </div>
    </>
  );
}
