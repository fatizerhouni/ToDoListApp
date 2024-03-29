export const addTask = (description) => ({
  type: "ADD_TASK", 
  payload: {
      id: Date.now(),
      description,
      isDone: false,
  },
});

export const setFilter = (filter) => ({
  type: "FILTER_TASKS",
  payload:filter,
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: id,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const editTask = (id, description) => ({
  type: "EDIT_TASK",
  payload: {
      id,
      description,
    },
});