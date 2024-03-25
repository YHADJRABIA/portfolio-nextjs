import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./UI/InvisibleAnchor"
import HoverImage from "./UI/HoverImage"

import styles from "./About.module.scss"
import SectionHeader from "./UI/SectionHeader"
import cn from "classnames"
import { DarkTheme } from "@/types/context"
import useIsOnMobile from "@/hooks/useIsOnMobile"

const PRIMARY_IMAGE = "/me-with-pysen.jpg"
const SECONDARY_IMAGE = "/me.jpg"

const About = ({ isDarkTheme }: DarkTheme) => {
  const { t } = useTranslation("common")
  const isOnMobile = useIsOnMobile()

  const imageDimension = isOnMobile ? 320 : 400

  return (
    <section
      className={cn(styles.aboutSection, { [styles.darkTheme]: isDarkTheme })}
    >
      <InvisibleAnchor id="about" />
      <div className={styles.photoContainer}>
        <HoverImage
          src={PRIMARY_IMAGE}
          hoverSrc={SECONDARY_IMAGE}
          alt={t("myself")}
          title={t("myself")}
          data-testid="about-photo"
          width={imageDimension}
          height={imageDimension}
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
