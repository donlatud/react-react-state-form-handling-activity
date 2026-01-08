import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome");

  const ThaiHandleClick = () => {
    setMessage("สวัสดี");
  };

  const EnglishHandleClick = () => {
    setMessage("Hi");
  };

  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{message}</h2>
        <div className="buttons">
          <button onClick={EnglishHandleClick}>Hi</button>
          <button onClick={ThaiHandleClick}>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;
