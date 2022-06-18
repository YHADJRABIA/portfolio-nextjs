import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

import styles from "./Card.module.scss"
import cn from "classnames"
import useTranslation from "next-translate/useTranslation"

interface PropTypes {
  name: string
  img: string
  slug: string
  url?: string
  repo?: string
  id?: number
}

const Card = ({ name, img, url, repo, slug }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  const { t } = useTranslation("project")
  return (
    <li className={cn(styles.card, { [styles.darkTheme]: darkTheme })}>
      <Link href={`/projects/${slug}`} passHref>
        <a className={styles.imageContainer} title={name}>
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
        </a>
      </Link>
      <h3 className={styles.projectName}>{name}</h3>

      <Link href={`/projects/${slug}`} passHref>
        <a className={styles.projectDetails} title={name}>
          {t("moreDetails")}
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
