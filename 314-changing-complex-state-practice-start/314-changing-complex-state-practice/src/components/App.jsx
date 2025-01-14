import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChanges(e) {
  
    const {value, name} = e.target; 
    
    setContact((prevValue) => {
      console.log(prevValue);
      
      if (name==='fName') {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email 
        };
      } else if (name==='lName') {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email 
        };
      } else if (name==='email') {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value 
        };
      }
    });

  } 

  return (    
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChanges} />
        <input name="lName" placeholder="Last Name" onChange={handleChanges} />
        <input name="email" placeholder="Email" onChange={handleChanges} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
