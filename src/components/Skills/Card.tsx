import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import styles from "./Card.module.scss"
import cn from "classnames"

interface PropTypes {
  name: string
  icon: string
}

const Card = ({ name, icon }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <li
      title={name}
      className={cn(styles.skillCard, { [styles.darkTheme]: darkTheme })}
    >
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default Card
