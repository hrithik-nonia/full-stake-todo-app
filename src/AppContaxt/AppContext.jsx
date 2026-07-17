import { createContext, useState } from "react";

export const AppContext = createContext();

export const TaskProvider = ({ children }) => {
  const [editTask, setEditTask] = useState(null);

  // state for store data
  const [getData, setGetData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        editTask,
        setEditTask,
        getData,
        setGetData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
