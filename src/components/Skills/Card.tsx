import { DarkTheme } from "@/types/context"
import styles from "./Card.module.scss"
import cn from "classnames"

interface PropTypes extends DarkTheme {
  name: string
  icon: string
}

const Card = ({ name, icon, isDarkTheme }: PropTypes) => {
  return (
    <li
      title={name}
      className={cn(styles.skillCard, { [styles.darkTheme]: isDarkTheme })}
    >
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default Card
