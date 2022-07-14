import React from "react";
import { useState } from "react";

const Todolist = ({ item, handledelete }) => {
  const [done, setDone] = useState(false);
  const { id } = item;

  const handledone = () => {
    setDone((prev) => !prev);
  };
  return (
    <div className="todo">
      <h4 className="todo">{item.todo}</h4>

      <button onClick={() => handledelete(id)} className="but3">
        Delete
      </button>
      {!done ? (
        <button onClick={handledone}>Not Done</button>
      ) : (
        <button className="done" onClick={handledone}>
          Done
        </button>
      )}
    </div>
  );
};

export default Todolist;
