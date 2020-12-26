import React, { useContext } from "react";
import "../styles.css";
import { FaRegTrashAlt, FaCheckCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { TodoContext } from "../context/TodoContext";

const TaskList = () => {
  const context = useContext(TodoContext);
  console.log(context);

  return (
    <div className="container p-3">
      <ul className="task-list">
        {context.incompleteTodoLength === 0 && !context.active ? (
          <li className="task-list-item">
            You currently have <span className="blue">0</span> tasks. Add a task
            to get started!
          </li>
        ) : !context.active ? (
          context.todos.map(
            (todo) =>
              !todo.complete && (
                <li key={todo.id} className="task-list-item ">
                  <FaCheckCircle
                    onClick={() => context.toggleTodo(todo)}
                    className="check-icon"
                  />{" "}
                  {todo.todo}
                  <FaRegTrashAlt
                    onClick={() => context.removeTodo(todo)}
                    className="trash-icon"
                  />
                </li>
              )
          )
        ) : (
          context.todos.map(
            (todo) =>
              todo.complete && (
                <li key={todo.id} className="task-list-item complete">
                  <VscDebugRestart
                    onClick={() => context.toggleTodo(todo)}
                    className="restart-icon"
                  />{" "}
                  {todo.todo}
                  <FaRegTrashAlt
                    onClick={() => context.removeTodo(todo)}
                    className="trash-icon"
                  />
                </li>
              )
          )
        )}
      </ul>
    </div>
  );
};

export default TaskList;