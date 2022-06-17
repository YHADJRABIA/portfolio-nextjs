import Card from "./Card"
import { getAllProjects } from "@/data/projects"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "../UI/InvisibleAnchor"
import { Project } from "@/types/projects"
import styles from "./Projects.module.scss"
import SectionHeader from "../UI/SectionHeader"

const Projects = () => {
  const { t } = useTranslation("common")

  const projects = getAllProjects()

  return (
    <section className={styles.projectsSection}>
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
        {projects.map((project: Project, id: number) => (
          <Card
            key={id}
            name={project.name}
            img={project.img}
            url={project.url}
            description={project.description}
            repo={project.repo}
            slug={project.slug}
          />
        ))}
      </ul>
    </section>
  )
}

// Fetching from database to be implemented
// export const getStaticProps = async () => {
// const username = "YHADJRABIA";
// try {
//     const res = await axios.get(
//       `https://api.github.com/users/${username}/repos`
//     );
//     const repos = res.data;
//     console.log(repos);
//     return {
//       props: { projects: projects },
//     };
// } catch (err) {
//
// }
// };

export default Projects
