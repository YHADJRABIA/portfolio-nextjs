import React, { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggler: FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    console.log("test", darkMode, toggleDarkMode);
    toggleDarkMode();
  };
  return (
    <div className="theme-toggler">
      <i
        className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
        data-testid="dark-mode"
        onClick={toggleTheme}
      ></i>
    </div>
  );
};

export default ThemeToggler;
