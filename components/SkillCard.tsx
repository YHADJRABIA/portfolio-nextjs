import React from "react"

interface PropsType {
  name: string
  icon: string
}

const SkillCard = ({ name, icon }: PropsType) => {
  return (
    <li title={name} className="skill-card">
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  )
}

export default SkillCard
