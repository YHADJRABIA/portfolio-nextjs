import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

import styles from "./Card.module.scss"
import cn from "classnames"

interface PropTypes {
  name: string
  img: string
  slug: string
  url?: string
  repo?: string
  description: string
  id?: number
}

const Card = ({ name, img, url, description, repo, slug }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <li className={cn(styles.card, { [styles.darkTheme]: darkTheme })}>
      <Link href={`/projects/${slug}`} passHref>
        <a title={name}>
          <div className={styles.imageContainer}>
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

          <div className={styles.cardContent}>
            <h3>{name}</h3>
            <div className={styles.cardDescription}>
              <p className="ow">{description}</p>
            </div>
          </div>
        </a>
      </Link>

      <div className={styles.cardFooter}>
        {url && (
          <div className={styles.projectLink}>
            <Link href={url} passHref>
              <a title={url}>
                <i className="fas fa-link"></i>
              </a>
            </Link>
          </div>
        )}
        {repo && (
          <div className={styles.projectRepo}>
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

export default Card
