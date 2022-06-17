import styles from "./Card.module.scss"

interface PropTypes {
  name: string
  icon: string
}

const Card = ({ name, icon }: PropTypes) => {
  return (
    <li title={name} className={styles.skillCard}>
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default Card
