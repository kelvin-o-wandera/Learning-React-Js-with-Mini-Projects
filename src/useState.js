// Hooks can not be inside if statements, inside loop,

import React, { useState } from "react";

function App() {
  /* { count: 0, answer: "Yes"} difficult to work with */
  const [count, setCount] = useState(0);
  //   const [answer, setAnswer] = useState("Yes");

  // function increment() {
  //   setCount((prevState) => {
  //     return { ...prevState, count: prevState.count + 1 };
  //   });
  // }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
