import Typewriter from "typewriter-effect"
import { AttentionSeeker } from "react-awesome-reveal" // Reveal effect
import Particles from "./ParticleConfig" // Interactive background
import useTranslation from "next-translate/useTranslation"

import styles from "./Hero.module.scss"

const Hero = () => {
  const { t } = useTranslation("common")

  const occupations = [
    t("common:occupations.developer"),
    t("common:occupations.translator"),
    t("common:occupations.polyglot"),
  ]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AttentionSeeker triggerOnce={true} effect="rubberBand">
          <h1 className={styles.title}>{`${t("firstName")} ${t(
            "lastName"
          )}`}</h1>
        </AttentionSeeker>
        <h2 className={styles.subtitle}>
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
      <a href="#about" title="Scroll down!" className={styles.scrollDown}></a>
    </div>
  )
}

export default Hero
