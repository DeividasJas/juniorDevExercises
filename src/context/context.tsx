import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  console.log("All tasks", allTasks);
  // console.log("Completed Tasks", completedTasks);

  return (
    <AppContext.Provider
      value={{ completedTasks, setCompletedTasks, allTasks, setAllTasks }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
