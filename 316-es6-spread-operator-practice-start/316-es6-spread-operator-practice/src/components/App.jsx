import React from "react";
import { useState } from "react";

function App() {
  
  const [toDo, setTodo] = useState('');
  const [items, setItems] = useState([]);
  
  function handleSubmission(e) {
    
    const newTodo = e.target.value;
    setTodo(newTodo);
    console.log(newTodo);
  }

  function addItem() {
    setItems( prevItems => [...prevItems, toDo] );
    console.log(items);
   // setTodo("");    //clear it
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
          <input type="text" value={toDo} onChange={handleSubmission} />
          <button type="text" value={items} onClick={addItem} >
            <span>Add</span>
          </button>
      </div>
      <div>
        <ul>
        {items.map(element => <li>{element}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
