import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
import Todo from "./Todo";
function App() {
  const [action, setAction] = useState("");
  const [actionarray, setActionarray] = useState([]);
  const [signin, setSignin] = useState(false);

  const handlechange = (e) => {
    const enter = e.target.value;
    setAction(enter);
  };

  const handleclick = () => {
    const todoitem = {
      id: new Date().getMilliseconds(),
      todo: action,
    };

    action && action.length >= 3
      ? setActionarray((prev) => [...prev, todoitem])
      : alert("Enter an action");
  };

  const handleclick2 = () => {
    setSignin((prev) => !prev);
  };

  const handledelete = (id) => {
    const newTodoList = actionarray.filter((item) => item.id !== id);
    setActionarray(newTodoList);
  };

  console.log(signin);

  const renderaction = actionarray?.map((item, index) => (
    <Todolist item={item} keys={index} handledelete={handledelete} />
  ));
  //console.log(actionarray);
  return (
    <div className="App">
      <h1 className="head"> To-Do List</h1>
      <input
        className="input"
        placeholder="Enter an Action Plan"
        type="string"
        value={action}
        onChange={(e) => handlechange(e)}
      />
      <button className="but" onClick={handleclick}>
        Add to List
      </button>
      {renderaction} <br />
    </div>
  );
}

export default App;
