import Card from "./Card"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "../UI/InvisibleAnchor"
import { Project } from "@/types/models/projects"
import styles from "./Projects.module.scss"
import SectionHeader from "../UI/SectionHeader"
import cn from "classnames"
import { DarkTheme } from "@/types/context"

interface PropTypes extends DarkTheme {
  data: Project[]
}

const Projects = ({ data, isDarkTheme }: PropTypes) => {
  const { t } = useTranslation("common")

  return (
    <section
      className={cn(styles.projectsSection, {
        [styles.darkTheme]: isDarkTheme,
      })}
    >
      <InvisibleAnchor id="projects" />
      <SectionHeader
        title={t("portfolio.title")}
        content={
          <Trans
            i18nKey="common:portfolio.content"
            components={{
              br: <br />,
              a: (
                <a
                  href="https://github.com/YHADJRABIA/"
                  title="GitHub"
                  target="blank"
                />
              ),
            }}
          />
        }
      />

      <ul className={styles.cardsContainer}>
        {data.map((project: Project, id: number) => (
          <Card
            key={id}
            name={project.name}
            img={project.image}
            url={project.url}
            repo={project.repo}
            slug={project.slug}
            isDarkTheme={isDarkTheme}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects
