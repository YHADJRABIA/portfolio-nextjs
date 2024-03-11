import { Image, ResponsiveImageType } from "react-datocms"
import Link from "next/link"

import styles from "./Card.module.scss"
import cn from "classnames"
import useTranslation from "next-translate/useTranslation"
import { DarkTheme } from "@/types/context"

interface PropTypes extends DarkTheme {
  name: string
  img: { responsiveImage: ResponsiveImageType }
  slug: string
  url?: string
  repo?: string
}

const Card = ({ name, img, url, repo, slug, isDarkTheme }: PropTypes) => {
  const { t } = useTranslation("project")
  const contentExists = img && name && slug && (url || repo)
  const href = url ? url : repo ?? `/projects/${slug}`

  return (
    <>
      {contentExists && (
        <li className={cn(styles.card, { [styles.darkTheme]: isDarkTheme })}>
          <Link
            href={href}
            className={styles.imageContainer}
            title={name}
            target="_blank"
            rel="nofollow"
          >
            <Image data={img.responsiveImage} />
          </Link>

          <h3 className={styles.projectName}>{name}</h3>

          <Link
            href={`/projects/${slug}`}
            className={styles.projectDetails}
            title={name}
          >
            {t("moreDetails")}
          </Link>

          <div className={styles.cardFooter}>
            {url && (
              <div className={styles.projectLink}>
                <Link href={url} title={url}>
                  <i className="fas fa-link"></i>
                </Link>
              </div>
            )}
            {repo && (
              <div className={styles.projectRepo}>
                <Link href={repo} title={repo}>
                  <i className="fab fa-github"></i>
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
