import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";

// Svg
import NotFoundImage from "../resources/NotFoundImage";

// Translation
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const PageNotFound: NextPage = () => {
  const { t } = useTranslation("pageNotFound");
  const [counter, setCounter] = useState(300);
  const router: NextRouter = useRouter();

  // Redirects user after 3 seconds
  const redirect = (isMounted: boolean): void => {
    if (isMounted) {
      let timer: NodeJS.Timeout = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      if (counter === 0) {
        clearTimeout(timer);
        router.push("/");
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    redirect(isMounted);

    return () => {
      isMounted = false;
    };
  }, [counter, router]);

  return (
    <>
      <Head>
        <title>Yacine Hadj Rabia | 404</title>
      </Head>

      <div className="page-not-found">
        <NotFoundImage />
        <h3>{t("pageNotFound")}</h3>
        <h4>
          <Trans
            i18nKey={t("redirectionIn")}
            components={[
              <Link href="/" passHref>
                <a title="Home page"></a>
              </Link>,
            ]}
            values={{ counter }}
            defaultTrans={t("redirectionIn")}
          />
        </h4>
      </div>
    </>
  );
};

export default PageNotFound;
