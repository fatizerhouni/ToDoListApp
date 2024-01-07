import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { setFilter } from "../JS/Actions/actions";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "done":
        return task.isDone;
      case "notDone":
        return !task.isDone;
      default:
        return true;
    }
  });
  console.log(filteredTasks)

  return (
    <div className="list_container">
      <div className="buttons">
        <button onClick={() => dispatch(setFilter("all"))} className="filter_button">
          All
        </button>
        <button onClick={() => dispatch(setFilter("done"))} className="filter_button">
          Done
        </button>
        <button onClick={() => dispatch(setFilter("notDone"))} className="filter_button">
          Not Done
        </button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} className="task" />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
