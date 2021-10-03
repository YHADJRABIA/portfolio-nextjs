import React, { FC } from "react";

interface ISkill {
  name: string;
  icon: string;
}

const Skill: FC<ISkill> = ({ name, icon }) => {
  return (
    <li title={name} className="skill-card">
      <i className={icon}></i>
      <h5>{name}</h5>
    </li>
  );
};

export default Skill;
