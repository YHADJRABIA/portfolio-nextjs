import { FC } from "react"
import ProjectCard from "./ProjectCard"
import { getAllProjects } from "@/data/projects"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./InvisibleAnchor"
import { Project } from "@/types/projects"

const Projects: FC = () => {
  const { t } = useTranslation("common")

  const projects = getAllProjects()

  return (
    <section className="projects-section">
      <InvisibleAnchor id="projects" />
      <div className="section-text-container">
        <h2>{t("portfolio.title")}</h2>
        <p>
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
        </p>
      </div>
      <ul className="projects-card-container">
        {projects.map((project: Project, id: number) => (
          <ProjectCard
            key={id}
            name={project.name}
            img={project.img}
            url={project.url}
            description={project.description}
            repo={project.repo}
            tags={project.tags}
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
