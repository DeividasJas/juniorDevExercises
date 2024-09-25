import TaskCard from "./TaskCars";
import { useEffect } from "react";
import { useAppContext } from "./context/context";
export default function DisplayTasks() {
  const { allTasks, setAllTasks } = useAppContext();

  if (allTasks.length >= 1) {
    return (
      <div>
        <ul className="taskList">
          {allTasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskCard task={task} setAllTasks={setAllTasks} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p>No task to do</p>;
  }
}
