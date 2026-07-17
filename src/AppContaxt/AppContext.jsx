import { createContext, useState } from "react";

export const AppContext = createContext();

export const TaskProvider = ({ children }) => {
  const [editTask, setEditTask] = useState(null);

  return (
    <AppContext.Provider
      value={{
        editTask,
        setEditTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
