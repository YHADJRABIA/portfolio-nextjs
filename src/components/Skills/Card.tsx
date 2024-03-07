import styles from "./Card.module.scss"
import cn from "classnames"

interface PropTypes {
  name: string
  icon: string
  isDarkTheme: boolean
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
