import React, { createContext, useState, useEffect, useReducer } from "react";
import { useLocalStorage } from "../helper/useLocalStorage";
import { reducer } from "../reducer/reducer";

export const TodoContext = createContext();

const INITIAL_STATE = [];

export default function TodoProvider({ children }) {
  const [storage, setStorage] = useLocalStorage("todos", INITIAL_STATE);
  const [state, dispatch] = useReducer(reducer, storage);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setStorage(state);
  }, [state]);

  return (
    <TodoContext.Provider
      value={{
        active,
        setActive,
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
