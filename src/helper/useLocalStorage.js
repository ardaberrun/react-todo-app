// custom hook

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storage, updateStorage] = useState(() => {
    const control = localStorage.getItem(key);
    return control ? JSON.parse(control) : initialValue;
  });

  const setStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    updateStorage(value);
  };

  return [storage, setStorage];
};