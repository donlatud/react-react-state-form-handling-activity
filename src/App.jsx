import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{message}</h2>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
