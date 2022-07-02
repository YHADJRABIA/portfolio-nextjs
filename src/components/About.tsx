import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./UI/InvisibleAnchor"
import HoverImage from "./UI/HoverImage"

import styles from "./About.module.scss"
import SectionHeader from "./UI/SectionHeader"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import cn from "classnames"

const About = () => {
  const { t } = useTranslation("common")

  const { darkTheme } = useContext(ThemeContext)

  return (
    <section
      className={cn(styles.aboutSection, { [styles.darkTheme]: darkTheme })}
    >
      <InvisibleAnchor id="about" />
      <div className={styles.photoContainer}>
        <HoverImage
          src="/me-with-pysen.jpg"
          hoverSrc="/me.jpg"
          alt={t("myself")}
          title={t("myself")}
          data-testid="about-photo"
          width={400}
          height={400}
          quality={60}
        />
      </div>

      <SectionHeader
        title={t("about.title")}
        content={
          <Trans i18nKey="common:about.content" components={{ br: <br /> }} />
        }
      />
    </section>
  )
}

export default About
