import React, {useState} from "react";

function Input() {
   
    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default Input;