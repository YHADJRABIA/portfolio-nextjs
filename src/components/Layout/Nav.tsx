import { useState, useRef, useEffect } from "react"
import Link from "next/link"

import useTranslation from "next-translate/useTranslation"

import cn from "classnames"

import BurgerMenu from "./BurgerMenu"
import ThemeToggler from "./ThemeToggler"
import LanguageSwitch from "./LanguageSwitch"
import useIsOnMobile from "@/hooks/useIsOnMobile"
import styles from "./Nav.module.scss"

const Nav = () => {
  const { t } = useTranslation("common")

  const isOnMobile = useIsOnMobile()

  const menuRef = useRef<null | HTMLElement>(null) // To detect if user clicks outside of the menu area, close the menu if so
  const navItems = [
    {
      title: t("navNames.about"),
      url: "#about",
      dataId: "about-link",
    },
    {
      title: t("navNames.skills"),
      url: "#skills",
      dataId: "skills-link",
    },
    {
      title: t("navNames.projects"),
      url: "#projects",
      dataId: "projects-link",
    },
    {
      title: t("navNames.contact"),
      url: "#contact",
      dataId: "contact-link",
    },
  ]

  const [toggled, setToggled] = useState(false)
  const [navbar, setNavbar] = useState(false)

  // Subscribing to events when components mounts then unsubscribing if component unmounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    window.addEventListener("scroll", toggleBackground)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
      window.addEventListener("scroll", toggleBackground)
    }
  })

  /* Modifies nav's background if user's verical scroll >= hero banner */
  const toggleBackground = (): void => setNavbar(window.scrollY >= 975)

  // Closes menu if user clicks outside of menu
  const handleClickOutside = (e: MouseEvent): void => {
    !menuRef.current?.contains(e.target as Node) && closeMenu()
  }

  const closeMenu = (): void => setToggled(false)

  return (
    <nav
      ref={menuRef}
      className={cn(styles.navItems, { [styles.active]: navbar })}
    >
      <Link href="/" passHref>
        <a
          className={cn(styles.logo, { [styles.active]: navbar })}
          title="Logo"
          data-testid="logo"
        >
          Y H R
        </a>
      </Link>
      {/* --- Phone only ---*/}
      {isOnMobile && (
        <BurgerMenu toggled={toggled} setToggled={setToggled} navbar={navbar} />
      )}
      {/* --------*/}

      <ul className={cn(styles.menu, { [styles.toggled]: toggled })}>
        {navItems.map((item, id) => (
          <li key={id}>
            <Link href={item.url} passHref>
              <a
                title={item.title}
                data-testid={item.dataId}
                className={cn(styles.links, { [styles.active]: navbar })}
                onClick={closeMenu}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
        <li>
          <LanguageSwitch setToggled={setToggled} />
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
