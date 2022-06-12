interface PropTypes {
  name: string
  icon: string
}

const SkillCard = ({ name, icon }: PropTypes) => {
  return (
    <li title={name} className="skill-card">
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default SkillCard
