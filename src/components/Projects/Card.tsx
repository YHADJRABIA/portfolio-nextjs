import { ThemeContext } from "@/context/ThemeContext"
import { Image, ResponsiveImageType } from "react-datocms"
import Link from "next/link"
import { useContext } from "react"

import styles from "./Card.module.scss"
import cn from "classnames"
import useTranslation from "next-translate/useTranslation"

interface PropTypes {
  name: string
  img: { responsiveImage: ResponsiveImageType }
  slug: string
  url?: string
  repo?: string
}

const Card = ({ name, img, url, repo, slug }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  const { t } = useTranslation("project")
  const contentExists = img && name && slug && (url || repo)

  return (
    <>
      {contentExists && (
        <li className={cn(styles.card, { [styles.darkTheme]: darkTheme })}>
          <Link href={`/projects/${slug}`} passHref>
            <a className={styles.imageContainer} title={name}>
              <Image data={img.responsiveImage} />
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
      )}
    </>
  )
}

export default Card
