import React, { useState } from "react";
import Heading from "./Heading";
import ToDoList from "./ToDoList";

function App() { 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  
  
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }    

function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }    

  return (
    <div className="container">
      <Heading />

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
        
      <ToDoList items={items}/>
    </div>
  );
}

export default App;
