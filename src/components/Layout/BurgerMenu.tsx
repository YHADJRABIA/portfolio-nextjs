import { SetStateAction, FC, Dispatch, useEffect } from "react"
import cn from "classnames"
import styles from "./BurgerMenu.module.scss"

interface PropTypes {
  toggled: boolean
  navbar: boolean
  setToggled: Dispatch<SetStateAction<boolean>>
}

/* Props from Nav component */
const BurgerMenu: FC<PropTypes> = ({ toggled, setToggled, navbar }) => {
  useEffect(() => {
    document.addEventListener("keydown", keyboardHandler, true)
    return () => {
      document.removeEventListener("keydown", keyboardHandler, true)
    }
  })

  // On/Off menu button
  const toggleMenu = (): void => setToggled(!toggled)

  // Closes menu if escape key pressed
  const keyboardHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") setToggled(false)
  }

  return (
    <div
      className={cn(styles.icon, { [styles.toggled]: toggled })}
      onClick={toggleMenu}
      data-testid="burger-menu"
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
    >
      {[1, 2, 3].map(i => (
        <div className={cn(styles.line, { active: navbar })} key={i}></div>
      ))}
    </div>
  )
}

export default BurgerMenu
