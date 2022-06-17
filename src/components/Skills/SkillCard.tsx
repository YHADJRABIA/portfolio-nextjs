import styles from "./SkillCard.module.scss"

interface PropTypes {
  name: string
  icon: string
}

const SkillCard = ({ name, icon }: PropTypes) => {
  return (
    <li title={name} className={styles.skillCard}>
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default SkillCard
