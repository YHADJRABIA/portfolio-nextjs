import Card from "./Card"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "../UI/InvisibleAnchor"
import styles from "./Skills.module.scss"
import SectionHeader from "../UI/SectionHeader"
import cn from "classnames"
import { Skill } from "@/types/models/skill"
import { DarkTheme } from "@/types/context"

interface PropTypes extends DarkTheme {
  skills: Skill[]
}

const Skills = ({ skills, isDarkTheme }: PropTypes) => {
  const { t } = useTranslation("common")

  return (
    <section
      className={cn(styles.skillsSection, { [styles.darkTheme]: isDarkTheme })}
    >
      <InvisibleAnchor id="skills" />
      <SectionHeader
        title={t("skills.title")}
        content={
          <Trans
            i18nKey="common:skills.content"
            components={{
              br: <br />,
              a: (
                <a
                  href="https://www.youtube.com/watch?v=epVV7hEaQkQ"
                  title="YouTube"
                  target="blank"
                />
              ),
            }}
          />
        }
      />

      <div className={styles.cardsContainer}>
        <ul className={styles.skillsList} data-testid="skills-list">
          {skills.map((skill, id) => (
            <Card
              key={id}
              name={skill.name}
              icon={skill.icon}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
