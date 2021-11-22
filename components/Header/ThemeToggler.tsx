import React, { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTranslation from "next-translate/useTranslation";

const ThemeToggler: FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation("common");

  return (
    <div className="theme-toggler">
      <i
        className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
        data-testid="dark-mode"
        title={t("navNames.theme")}
        onClick={toggleDarkMode}
      ></i>
    </div>
  );
};

export default ThemeToggler;
