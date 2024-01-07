const initialState = {
  tasks: [
      { id: 1, description: "My first Task", isDone:false },
      { id: 2, description: "My seconde Task", isDone:true}
  ],
  filter: "all"
}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
      case "ADD_TASK" :
          return {
              ...state,
              tasks: [...state.tasks, action.payload],
          };
      case "FILTER_TASKS":
          return {
              ...state,
              filter: action.payload
          }
      case "TOGGLE_TASK": 
          return {
              ...state,
              tasks: state.tasks.map((task) => 
              task.id === action.payload ? { ...task, isDone: !task.isDone}: task)
          }
      case "DELETE_TASK":
          return {
              ...state,
              tasks: state.tasks.filter((task) => task.id !== action.payload)
          }
      case "EDIT_TASK":
          return {
              ...state,
              tasks: state.tasks.map((task) =>
              task.id === action.payload.id
                ? { ...task, description: action.payload.description }
                : task
            ),
          };
      default:
          return state;
  }
}

export default rootReducer;