import React, {useState} from "react";

function App() {

  const [header, setHeader] = useState("Submit login credentials"); 
  
  function handleEvent(e) {
    setHeader(header + e.target.value);
    return <h1>{header}</h1>
  }

  return (
    <div className="container">
      <h1>Hello {header} {name}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleEvent}>Submit</button>
    </div>
  );
}

export default App;
