import React, { useContext } from "react";
import { ThemeContext } from "./useContext";

export default function FunctionalContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <div style={themeStyles}>Function Theme</div>
    </div>
  );
}
