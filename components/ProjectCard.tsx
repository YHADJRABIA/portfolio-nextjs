import React from "react"

// NextJS
import Image from "next/image"
import Link from "next/link"

interface PropsType {
  name: string
  img: string
  url?: string
  repo?: string
  description: string
  tags: string[]
  id?: number
}

const ProjectCard = ({
  name,
  img,
  url,
  description,
  repo,
  tags,
}: PropsType) => {
  return (
    <li className="project-card">
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
        <div className="project-card-overlay" title={name}>
          <div className="project-overlay">
            <div className="project-tags-container">
              <ul className="project-tags">
                {tags.map((tag, id) => (
                  <li className="project-tag truncated" key={id}>
                    <small>{tag}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card-text">
        <h3>{name}</h3>
        <div className="project-description">
          <p className="ow">{description}</p>
        </div>
      </div>

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
