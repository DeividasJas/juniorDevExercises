import { React, useState, useEffect } from "react";
import AddTask from "./AddTask";
import DisplayTasks from "./DisplayTasks";
import Header from "./Header";
import "./styles.css";
import { AppProvider } from "./context/context";
import CompletedTasksList from "./CompletedTasksList";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <main>
          <div className=""></div>
          <AddTask />
          <DisplayTasks />
          <CompletedTasksList />
        </main>
      </div>
    </AppProvider>
  );
}
