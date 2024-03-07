import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Loader from "./UI/Loader"
import { isEmpty, isEmail } from "@/utilities/formValidator"
import ReCAPTCHA from "react-google-recaptcha"
import { notify } from "@/utilities/notification"

import axios from "axios" // API fetcher
import useTranslation from "next-translate/useTranslation"
import InvisibleAnchor from "./UI/InvisibleAnchor"

import styles from "./Contact.module.scss"
import Button from "./UI/Button"
import SectionHeader from "./UI/SectionHeader"
import cn from "classnames"

interface PropTypes {
  isDarkTheme: boolean
}

const Contact = ({ isDarkTheme }: PropTypes) => {
  const { t } = useTranslation("common")

  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const { locale } = useRouter()
  const [key, setKey] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState<string | null>(null) // reCAPTCHA's token (sent to backend to be validated by Google)
  const reCaptchaRef = useRef<ReCAPTCHA>(null)

  // Forcing re-mount of reCAPTCHA when language is switched or when view is shrunk
  useEffect(() => {
    setKey(key + 1)
  }, [locale, isDarkTheme, isMobile])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  })

  const handleResize = (): void => setIsMobile(window.innerWidth < 400)

  // Validating form + API call
  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const formData: any = { lang: locale, token }

    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    const { name, email, message } = formData

    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      notify("error", t("contact.emptyFields"))
      setIsLoading(false)
      return null
    }

    if (!isEmail(email)) {
      notify("error", t("contact.invalidEmail"))
      return null
    }

    if (!token) {
      notify("error", t("contact.untickedRecaptcha"))
      return null
    }

    // Validation before sending email
    try {
      setIsLoading(true)
      await axios.post("/api/mail", formData)
      setIsLoading(false)
      notify("success", t("contact.emailSent"))
    } catch (err) {
      console.error(err)
      setIsLoading(false)
      notify("error", t("contact.error"))
    }

    // Resetting form & reCAPTCHA
    e.target.reset()
    window.grecaptcha.reset()
  }

  return (
    <section
      className={cn(styles.contactSection, { [styles.darkTheme]: isDarkTheme })}
    >
      <InvisibleAnchor id="contact" />
      <SectionHeader
        title={t("contact.title")}
        content={t("contact.content")}
        textAlign="center"
      />

      <form
        method="post"
        onSubmit={handleOnSubmit}
        noValidate
        className={styles.formCard}
      >
        <div className={styles.formField}>
          <input
            placeholder={t("contact.johnSmith")}
            type="text"
            name="name"
            data-testid="contact-name"
          />
          <label htmlFor="name">{t("contact.name")}</label>
        </div>
        <div className={styles.formField}>
          <input
            placeholder="email@domain.com"
            type="email"
            name="email"
            data-testid="contact-email"
          />
          <label htmlFor="email">{t("contact.email")}</label>
        </div>
        <div className={styles.formField}>
          <textarea
            placeholder={t("contact.placeholder")}
            name="message"
            data-testid="contact-message"
          ></textarea>
        </div>

        <div className={styles.recaptchaContainer}>
          <ReCAPTCHA
            size={isMobile ? "compact" : "normal"}
            theme={isDarkTheme ? "dark" : "light"}
            key={key}
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT}
            ref={reCaptchaRef}
            data-testid="contact-recaptcha"
            onChange={token => setToken(token)}
            hl={locale}
            onExpired={() => setToken(null)}
          />
        </div>

        <Button
          variation="primary"
          testId="submit-contact-form"
          disabled={isLoading}
        >
          {!isLoading ? t("contact.submit") : <Loader />}
        </Button>
      </form>
    </section>
  )
}

export default Contact
