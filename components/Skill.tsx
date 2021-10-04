import React, { FC } from "react";

interface ISkill {
  name: string;
  icon: string;
}

const Skill: FC<ISkill> = ({ name, icon }) => {
  return (
    <li title={name} className="skill-card">
      <i className={icon}></i>
      <p>{name}</p>
    </li>
  );
};

export default Skill;
