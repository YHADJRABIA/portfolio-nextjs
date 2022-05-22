import React, { FC } from "react"
import Typewriter from "typewriter-effect"
import { AttentionSeeker } from "react-awesome-reveal" // Reveal effect
import Particles from "./ParticleConfig" // Interactive background
import useTranslation from "next-translate/useTranslation" // Translation

const Hero: FC = () => {
  const { t } = useTranslation("common")

  const occupations = [
    t("common:occupations.developer"),
    t("common:occupations.translator"),
    t("common:occupations.polyglot"),
  ]

  return (
    <div className="hero-container">
      <div className="hero-text">
        <AttentionSeeker triggerOnce={true} effect="rubberBand">
          <h1 className="hero-title">{`${t("firstName")} ${t("lastName")}`}</h1>
        </AttentionSeeker>
        <h2 className="hero-subtitle">
          <Typewriter
            options={{
              strings: occupations,
              delay: 80,
              deleteSpeed: 30,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <Particles />
      <a href="#about" title="Scroll down!" className="scroll-down-arrow"></a>
    </div>
  )
}

export default Hero
