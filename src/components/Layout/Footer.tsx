import { useContext } from "react"
import { useRouter } from "next/router"

import { AttentionSeeker } from "react-awesome-reveal" // Reveal effect

import styles from "./Footer.module.scss"

// Components
import links from "./links"

// Global state management
import { ThemeContext } from "@/context/ThemeContext"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"

interface PropTypes {
  color: string
}

const FooterSeparator = ({ color }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <svg
      className={styles.separatorSvg}
      style={{
        backgroundColor: !darkTheme ? color : "var(--secondary-black-color)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="var(--primary-black-color)"
        fillOpacity="1"
        d="M0,64L720,160L1440,64L1440,320L720,320L0,320Z"
      ></path>
    </svg>
  )
}

const Footer = ({ color }: PropTypes) => {
  const { t } = useTranslation("common")
  const { locale, locales, defaultLocale, asPath } = useRouter()
  return (
    <>
      <FooterSeparator color={color} />
      <footer>
        <address className={styles.links}>
          {links.map((link, id) => (
            <a href={link.path} title={link.name} key={id} target="blank">
              <i className={link.icon}></i>
            </a>
          ))}
        </address>
        <AttentionSeeker triggerOnce effect="flash">
          <p className={styles.madeWith}>
            <Trans
              i18nKey="common:madeWith"
              components={{
                em: <em />,
                a0: (
                  <a
                    href="https://nextjs.org/"
                    title="Next.js"
                    target="blank"
                  />
                ),
                a1: (
                  <a
                    href="https://www.typescriptlang.org/"
                    title="TypeScript"
                    target="blank"
                  />
                ),
              }}
            />
          </p>
        </AttentionSeeker>

        <small className={styles.copyright}>
          &copy;{new Date().getFullYear()}{" "}
          {`${t("firstName")} ${t("lastName")}`}
        </small>
      </footer>
    </>
  )
}

export default Footer
