import "./App.css";
import AddTask from "./Component/Addtask";
import ListTask from "./Component/ListTask";

function App() {
  return (
    <div className="container">
      <h2 className="title">My To-Do List</h2>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
