import React from "react";
import { FaRegTrashAlt, FaCheckCircle} from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import "../styles.css";

function TaskItem({ name, complete, toggle,remove }) {
  return (
    <li className="task-list-item ">
      {complete === false ? (
        <FaCheckCircle onClick={toggle} className="check-icon" />
      ) : (
        <VscDebugRestart onClick={toggle} className="restart-icon" />
      )}
      {name}
      <FaRegTrashAlt onClick={remove} className="trash-icon" />
    </li>
  );
}

export default TaskItem;
