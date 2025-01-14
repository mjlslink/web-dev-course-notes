import React from "react";
import { useState } from "react";


function App() {
  const now = new Date().toLocaleTimeString();
  const [time,setTime]= useState(now);

  setInterval(increase, 1000);

  function increase(){
    setTime(new Date().toLocaleTimeString());
  }
 
  return (
    
    <div className="container">
      <p>{time}</p>
    </div>
  );
}

export default App;
