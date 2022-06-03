import React, { FC } from "react"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import InvisibleAnchor from "./Utilities/InvisibleAnchor"
import HoverImage from "./Utilities/HoverImage"

const About: FC = () => {
  const { t } = useTranslation("common")

  return (
    <section className="about-section">
      <InvisibleAnchor id="about" />
      <div className="about-photo-container">
        <HoverImage
          src="/me.jpg"
          hoverSrc="/me-with-pysen.jpg"
          alt={t("myself")}
          title={t("myself")}
          data-testid="about-photo"
          width={400}
          height={400}
          objectFit="cover"
          quality={60}
        />
      </div>
      <div className="section-text-container">
        <h2>{t("about.title")}</h2>
        <p>
          <Trans i18nKey="common:about.content" components={{ br: <br /> }} />
        </p>
      </div>
    </section>
  )
}

export default About
