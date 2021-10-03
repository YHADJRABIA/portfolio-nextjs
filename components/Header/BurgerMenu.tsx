import React, { FC, Dispatch, useEffect } from "react";

interface IBurgerMenu {
  toggled: boolean;
  navbar: boolean;
  setToggled: Dispatch<React.SetStateAction<boolean>>;
}
interface KeyboardEvent {
  key: string;
}

/* Props from Nav component */
const BurgerMenu: FC<IBurgerMenu> = ({ toggled, setToggled, navbar }) => {
  useEffect(() => {
    document.addEventListener("keydown", keyboardHandler, true);
    return () => {
      document.removeEventListener("keydown", keyboardHandler, true);
    };
  });

  // On/Off menu button
  const toggleMenu = (): void => {
    setToggled(!toggled);
  };

  // Closes menu if escape key pressed
  const keyboardHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setToggled(false);
    }
  };

  return (
    <div
      className={`burger-icon + ${toggled ? "burger-toggled" : ""}`}
      onClick={toggleMenu}
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
    >
      {[1, 2, 3].map((i) => (
        <div
          className={`burger-line-${i} ${navbar ? "active" : ""}`}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default BurgerMenu;
