import React, { useState, useContext } from "react";
import "../styles.css";
import { TodoContext } from "../context/TodoContext";

const Header = ({ date }) => {
  const context = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");

  const handleClick = () => {
    context.addTodo(todoName);
    setTodoName("");
  };

  return (
    <>
      <div className="container mt-3 p-3">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <h4>{date}</h4>
            <p className="blue">{context.incompleteTodoLength} Active Tasks </p>
            <input
              className="header-input"
              type="text"
              placeholder="Enter a task"
              onChange={(e) => setTodoName(e.target.value)}
            />
            <button onClick={handleClick} className="header-button">
              Add Task
            </button>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex navx">
            <p
              onClick={() => context.setActive(false)}
              className={`${context.active ? "disabled" : ""}`}
            >
              Incomplete Tasks
            </p>
            <p
              onClick={() => context.setActive(true)}
              className={`ml-5 ${!context.active ? "disabled" : ""}`}
            >
              Completed Tasks
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;