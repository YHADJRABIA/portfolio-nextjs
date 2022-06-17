import SkillCard from "./SkillCard"
import { getAllSkills } from "@/data/skills"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "../InvisibleAnchor"
import styles from "./Skills.module.scss"
import SectionHeader from "../UI/SectionHeader"

const Skills = () => {
  const { t } = useTranslation("common")
  const skills = getAllSkills()
  return (
    <section className={styles.skillsSection}>
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
            <SkillCard key={id} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
