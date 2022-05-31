import React, { FC } from "react"
import SkillCard from "./SkillCard"
import skills from "@/data/skills.json"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./InvisibleAnchor"
import { Skill } from "@/models/skill"

interface PropsType {
  data: {
    attributes: Skill
  }[]
}

const Skills = ({ data }: PropsType) => {
  const { t } = useTranslation("common")
  return (
    <section className="skills-section">
      <InvisibleAnchor id="skills" />
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
        <ul className="skills-list" data-testid="skills-list">
          {data.map((skill, id) => (
            <SkillCard
              key={id}
              name={skill.attributes.name}
              icon={skill.attributes.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
