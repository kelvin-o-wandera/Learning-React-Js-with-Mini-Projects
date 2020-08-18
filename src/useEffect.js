// https://blog.webdevsimplified.com/2020-04/use-effect/ resource
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from "react";
// import randomcolor from "randomcolor"; /* Install from npm it is a function that returns random color in hex */

// function App() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("");

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   useEffect(() => {
//     setColor(randomcolor());
//   }, [count]);

//   return (
//     <div>
//       <h1 style={{ color: color }}>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("");

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(intervalId); // componentWillUnmount in action
//   }, []); // [] componentDidMount in action

//   useEffect(() => {
//     setColor(randomcolor());
//   }, [count]); // [count] componentDidUpdate in action

//   return (
//     <div>
//       <h1 style={{ color: color }}>{count}</h1>
//     </div>
//   );
// }

// function App() {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);
//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>;
//       })}
//     </>
//   );
// }

// function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <div>{windowWidth}</div>;
// }

function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource chnaged");

    return () => {
      console.log("returned from resource changed");
    };
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
export default App;
