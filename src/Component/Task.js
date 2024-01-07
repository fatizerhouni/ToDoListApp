import React, { useState } from "react";
import { deleteTask, editTask, toggleTask } from "../JS/Actions/actions";
import { useDispatch } from "react-redux";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";



const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask(task.id, description));
    setIsEditing(false);
  };
  return (
    <div class="task-container">
      {!isEditing ? (
        <div className="input_tasks">
          <div>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggle}
            className="checky"
          />
          <span
            className={
              task.isDone
                ? "task-description task-completed"
                : "task-description"
            }
          >
            {task.description}
          </span>
          </div>
          <div className="task-buttons">
          <button onClick={() => setIsEditing(true)}><FaEdit /></button>
          <button onClick={handleDelete}><FaTrashCan /></button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleEdit}>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Task;
