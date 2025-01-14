import React from "react";
import { useState } from "react";

function ToDoList(props) {
    var items = props.items;

    const [isDone, setIsDone] = useState(false);

    function strikeThrough() {
        console.log("CLicked");
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
    return (
        <div>
        <ul>
          {items.map(todoItem => (
            <li style={{textDecoration: isDone? "line-through" : null}} onClick={strikeThrough}>{todoItem}</li>
          ))}
        </ul>
      </div>  
    )
}

export default ToDoList;