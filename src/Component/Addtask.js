import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/actions";



const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask(description));
    setDescription("");
  };
  return (
    <div className="input_field">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add new Task..."
          onChange={(e) => setDescription(e.target.value)}
          className="task_input"
        />
        <button type="submit" className="add_button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
