import { joinClassname } from "../../utils/classname";
import "./input.css";

export default function TheInput({ className = "", ...props }) {
  const joinedClassname = joinClassname("input", className);

  return <input className={joinedClassname} {...props} />;
}
