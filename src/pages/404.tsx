import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { NextRouter, useRouter } from "next/router"
import Head from "next/head"
import styles from "./404.module.scss"

// Svg
import NotFoundImage from "@/resources/NotFoundImage"

// Translation
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"
import { useIsMounted } from "@/hooks/useIsMounted"

// In seconds
const TIMER_COUNT = 3

const PageNotFound: NextPage = () => {
  const { t } = useTranslation("pageNotFound")
  const isMounted = useIsMounted()
  const [counter, setCounter] = useState(TIMER_COUNT)
  const router: NextRouter = useRouter()

  // Redirects user after 3 seconds
  useEffect(() => {
    if (isMounted()) {
      const timer = setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)

      if (counter === 0) {
        clearTimeout(timer)
        router.push("/")
      }
    }
  }, [counter, isMounted, router])

  return (
    <>
      <Head>
        <title>Yacine Hadj Rabia | 404</title>
      </Head>

      <div className={styles.pageContainer}>
        <NotFoundImage />
        <h3>{t("pageNotFound")}</h3>
        <h4>
          <Trans
            i18nKey={t("redirectionIn")}
            components={[
              <Link key={0} href="/" passHref>
                <a title="Home page"></a>
              </Link>,
            ]}
            values={{ counter }}
            defaultTrans={t("redirectionIn")}
          />
        </h4>
      </div>
    </>
  )
}

// To avoid build's minified name not matching development's Component.name
PageNotFound.displayName = "PageNotFound"

export default PageNotFound
