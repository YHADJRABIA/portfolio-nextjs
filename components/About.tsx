import React, { FC } from "react";
import Image from "next/image"; // For lazy-loading images and size optimisation

// Translation
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

const About: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="about-section">
      <a
        id="about"
        href="https://github.com/YHADJRABIA/"
        className="anchor"
      ></a>
      <div className="about-photo-container">
        <Image
          src="/me.jpg"
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
  );
};

export default About;
