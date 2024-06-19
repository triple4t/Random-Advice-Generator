import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  async function fetchAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    console.log(response.data.slip.advice);
    setAdvice(response.data.slip.advice);
  }

  return (
    <>
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
