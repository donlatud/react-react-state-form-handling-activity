import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleValidate = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setMessage(`✅ ${email}`);
      setIsError(false);
    } else {
      setMessage(`❌ This ${email} is not valid please try again`);
      setIsError(true);
    }
    setEmail("");
  };

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container">
        <h2 style={{ color: isError ? "red" : "green" }}>{message}</h2>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
        <div className="buttons">
          <button type="submit" onClick={handleValidate}>
            Validate
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
