import React, { FC } from "react";
import Skill from "./Skill";
import skills from "../data/skills.json";

// Translation
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const Skills: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className=" skills-section">
      <a
        id="skills"
        className="anchor"
        href="https://github.com/YHADJRABIA/"
      ></a>
      <div className="section-text-container">
        <h2>{t("skills.title")}</h2>
        <p>
          <Trans
            i18nKey="common:skills.content"
            components={{
              br: <br />,
              a: (
                <a
                  className="youtube-link"
                  href="https://www.youtube.com/watch?v=epVV7hEaQkQ"
                  title="YouTube"
                  target="blank"
                />
              ),
            }}
          />
        </p>
      </div>
      <div className="skills-card-container">
        <ul className="skills-list">
          {skills.data.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
