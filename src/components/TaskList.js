import React, { useContext } from "react";
import "../styles.css";
import { TodoContext } from "../context/TodoContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const context = useContext(TodoContext);
  //console.log(context);

  return (
    <div className="container p-3">
      <ul className="task-list">
        {context.state.filter((item) => !item.complete).length === 0 &&
        !context.active ? (
          <li className="task-list-item">
            You currently have <span className="blue">0</span> tasks. Add a task
            to get started!
          </li>
        ) : !context.active ? (
          context.state.map(
            (todo) =>
              !todo.complete && (
                <TaskItem
                  key={todo.id}
                  name={todo.name}
                  complete={false}
                  toggle={() =>
                    context.dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                  remove={() =>
                    context.dispatch({ type: "REMOVE_TODO", payload: todo.id })
                  }
                />
              )
          )
        ) : (
          context.state.map(
            (todo) =>
              todo.complete && (
                <TaskItem
                  key={todo.id}
                  name={todo.name}
                  complete={true}
                  toggle={() =>
                    context.dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                  remove={() =>
                    context.dispatch({ type: "REMOVE_TODO", payload: todo.id })
                  }
                />
              )
          )
        )}
      </ul>
    </div>
  );
};

export default TaskList; 
