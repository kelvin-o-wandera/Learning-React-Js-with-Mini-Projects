import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionalContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}
