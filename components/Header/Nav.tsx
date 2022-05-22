import React, { FC, useState, useRef, useEffect } from "react"
import Link from "next/link"

import useTranslation from "next-translate/useTranslation" // Translation

/* Components */
import BurgerMenu from "./BurgerMenu"
import ThemeToggler from "./ThemeToggler"
import LanguageSwitch from "./LanguageSwitch"

const Nav: FC = () => {
  const { t } = useTranslation("common")

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
  const handleClickOutside = (e: any): void => {
    !menuRef.current?.contains(e.target) && closeMenu()
  }

  const closeMenu = (): void => setToggled(false)

  return (
    <nav ref={menuRef} className={`NavItems ${navbar ? "active" : ""}`}>
      <Link href="/" passHref>
        <a
          className={`nav-logo ${navbar ? "active" : ""}`}
          title="Logo"
          data-testid="logo"
        >
          Y H R
        </a>
      </Link>
      {/*--- Phone only ---*/}
      <BurgerMenu toggled={toggled} setToggled={setToggled} navbar={navbar} />
      {/*--------*/}

      <ul className={`nav-menu ${toggled ? "toggled" : ""}`}>
        {navItems.map((item, id) => (
          <li key={id}>
            <Link href={item.url} passHref>
              <a
                title={item.title}
                data-testid={item.dataId}
                className={`nav-links ${navbar ? "active" : ""}`}
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
