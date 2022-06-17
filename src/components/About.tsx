import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./InvisibleAnchor"
import HoverImage from "./UI/HoverImage"

import styles from "./About.module.scss"
import SectionHeader from "./UI/SectionHeader"

const About = () => {
  const { t } = useTranslation("common")

  return (
    <section className={styles.aboutSection}>
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
          objectFit="cover"
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
