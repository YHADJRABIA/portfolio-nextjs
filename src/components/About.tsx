import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./UI/InvisibleAnchor"
import HoverImage from "./UI/HoverImage"

import styles from "./About.module.scss"
import SectionHeader from "./UI/SectionHeader"
import cn from "classnames"
import { DarkTheme } from "@/types/context"

const About = ({ isDarkTheme }: DarkTheme) => {
  const { t } = useTranslation("common")

  return (
    <section
      className={cn(styles.aboutSection, { [styles.darkTheme]: isDarkTheme })}
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
