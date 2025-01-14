import React from "react";
import { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function updateFirstName(e) {
    setFirstName(e.target.value);
  }

  function updateLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateFirstName} />
        <input name="lName" placeholder="Last Name" onChange={updateLastName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
