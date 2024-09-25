import React from "react";
import { useAppContext } from "./context/context";
import TaskCard from "./TaskCars";
export default function CompletedTasksList() {
  const { completedTasks, allTasks } = useAppContext();

  if (completedTasks.length >= 1) {
    return (
      <div>
        <h2>Finished Tasks</h2>
        <ul className="taskList">
          {completedTasks.map((task) => {
            return (
              <li key={task.id} style={{ border: "1px solid green" }}>
                {task.task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>No finished tasks yet</p>;
  }
}
