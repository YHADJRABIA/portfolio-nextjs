import { FC, useContext } from "react"
import { useRouter } from "next/router"

import colors from "@/styles/abstracts/_colors.module.scss"

import { AttentionSeeker } from "react-awesome-reveal" // Reveal effect

// Components
import links from "./links"

// Global state management
import { ThemeContext } from "@/context/ThemeContext"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"

interface IFooter {
  color: string
}

const Footer: FC<IFooter> = ({ color }) => {
  const { t } = useTranslation("common")
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { darkMode } = useContext(ThemeContext)
  return (
    <>
      <svg
        className="footer-separator-svg"
        style={{ backgroundColor: !darkMode ? color : colors.secondaryBlack }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.primaryBlack}
          fillOpacity="1"
          d="M0,64L720,160L1440,64L1440,320L720,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <address className="footer-links">
          {links.map((link, id) => (
            <a href={link.path} title={link.name} key={id} target="blank">
              <i className={link.icon}></i>
            </a>
          ))}
        </address>
        <AttentionSeeker triggerOnce={true} effect="flash">
          <p className="made-with">
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

        <small className="copyright">
          &copy;{new Date().getFullYear()}{" "}
          {`${t("firstName")} ${t("lastName")}`}
        </small>
      </footer>
    </>
  )
}

export default Footer
