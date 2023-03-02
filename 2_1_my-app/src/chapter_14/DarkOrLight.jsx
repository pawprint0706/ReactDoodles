import React, { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContent";

function DarkOrLight() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <MainContext />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
