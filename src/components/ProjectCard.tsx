import Image from "next/image"
import Link from "next/link"

interface PropTypes {
  name: string
  img: string
  slug: string
  url?: string
  repo?: string
  description: string
  id?: number
}

const ProjectCard = ({
  name,
  img,
  url,
  description,
  repo,
  slug,
}: PropTypes) => {
  return (
    <li className="project-card">
      <Link href={`/projects/${slug}`} passHref>
        <a title={name}>
          <div className="project-card-image">
            <Image
              src={img}
              alt={name}
              title={name}
              width={250}
              height={250}
              objectFit="cover"
              quality={60}
              layout="responsive"
            />
          </div>

          <div className="project-card-text">
            <h3>{name}</h3>
            <div className="project-description">
              <p className="ow">{description}</p>
            </div>
          </div>
        </a>
      </Link>

      <div className="project-card-footer">
        {url && (
          <div className="project-link">
            <Link href={url} passHref>
              <a title={url}>
                <i className="fas fa-link"></i>
              </a>
            </Link>
          </div>
        )}
        {repo && (
          <div className="project-repo">
            <Link href={repo} passHref>
              <a title={repo}>
                <i className="fab fa-github"></i>
              </a>
            </Link>
          </div>
        )}
      </div>
    </li>
  )
}

export default ProjectCard
