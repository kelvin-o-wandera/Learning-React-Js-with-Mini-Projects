import React, { useState, useRef, useEffect } from "react";
// useRef is important for persisting values across renders without re-rendering
// useState causes re-render but useRef doesn't
// function App() {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1); // { current: 1}

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const inputRef = useRef(1); // { current: 1}

//   function focus() {
//     inputRef.current.focus();
//     inputRef.current.value = "Some value";
//   }

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </div>
//   );
// }

function App() {
  const [name, setName] = useState("");
  const prevName = useRef(""); // { current: 1}

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
}

export default App;
