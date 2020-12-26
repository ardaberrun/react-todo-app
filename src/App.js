import React from "react";
import "./styles.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import moment from "moment";
import TodoProvider from "./context/TodoContext";

export default function App() {
  const date = moment().format("dddd, MMMM DD");

  return (
    <TodoProvider>
      <div className="container main shadow p-3 rounded">
        <Header date={date} />
        <TaskList />
      </div>
    </TodoProvider>
  );
}