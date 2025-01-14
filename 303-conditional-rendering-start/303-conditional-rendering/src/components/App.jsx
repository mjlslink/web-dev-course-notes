import React from "react";
import LoginForm from "./LoginForm";
 
var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1> Logged In</h1>
  } else {
    return <LoginForm />
  }
}

function App() {
  return (
    <div className="container">
     {renderConditionally()}
    </div>
  );
}

export default App;
