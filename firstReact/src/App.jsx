import { useState } from "react";

function App() {
  const [count, updateCount] = useState(0);

  let clickMe = () => {
    console.log("clicking");
    updateCount(count + 1);
  }

  let downClickMe = () => {
    console.log("down clicking");
    updateCount(count - 1);
  }

  return (
    <>
    <h1>Hello world</h1>
    <h2>{count}</h2>
    <button onClick={clickMe} style={{margin:"10px", padding: "10px"}}>up</button>
    <br></br>
    <button onClick={downClickMe} style={{margin:"10px", padding: "10px"}}>down</button>
    </>
  )
}

export default App
