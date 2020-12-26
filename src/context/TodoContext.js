import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../helper/useLocalStorage";

export const TodoContext = createContext();
// const INITIAL_STATE = [
//   {
//     id: 1,
//     todo: "Dişlerini Fırçala",
//     complete: false
//   },
//   {
//     id: 2,
//     todo: "Kitap oku",
//     complete: false
//   },
//   {
//     id: 3,
//     todo: "Saat 1' de yat",
//     complete: false
//   },
//   {
//     id: 4,
//     todo: "Face Gir",
//     complete: false
//   },
//   {
//     id: 5,
//     todo: "Todo Css Yap",
//     complete: true
//   },
//   {
//     id: 6,
//     todo: "React Öğren",
//     complete: true
//   },
//   {
//     id: 7,
//     todo: "Css'i Responsive Yap",
//     complete: true
//   },
//   {
//     id: 8,
//     todo: "Derse Gir",
//     complete: true
//   },
//   {
//     id: 9,
//     todo: "Derse Girme",
//     complete: false
//   }
// ];

export default function TodoProvider({ children }) {
  const [storage, setStorage] = useLocalStorage("todos", []);

  const [todos, setTodos] = useState(storage);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStorage(todos);
  }, [todos]);

  const addTodo = (todo) => {
    return todo.length > 3
      ? setTodos([...todos, { id: Date.now(), todo: todo, complete: false }])
      : alert("Your task must be greater than 3 letters");
  };

  const toggleTodo = (todo) =>
    setTodos(
      todos.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, complete: !todoItem.complete }
          : todoItem
      )
    );

  const removeTodo = (todo) =>
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id));

  const incompleteTodoLength = todos.filter((todo) => !todo.complete).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        incompleteTodoLength,
        active,
        setActive,
        addTodo,
        toggleTodo,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}