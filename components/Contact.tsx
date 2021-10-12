import React, { FC, useState, useRef } from "react";
import { useRouter } from "next/router";

// Components
import Animation from "./Animation";

// Validators
import { isEmpty, isEmail } from "../utilities/validator";
import ReCAPTCHA from "react-google-recaptcha";

// Norifications
import { notify } from "../utilities/notification";

import axios from "axios"; // API fetcher

// Translation
import useTranslation from "next-translate/useTranslation";

const Contact: FC = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null); //reCAPTCHA's token (sent to backend to be validated by Google)
  const reCaptchaRef = useRef<ReCAPTCHA>(null);

  // Validating form + API call
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const formData: any = { lang: locale, token };

    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const { name, email, message } = formData;

    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      notify("error", t("contact.emptyFields"));
      setLoading(false);
      return null;
    }

    if (!isEmail(email)) {
      notify("error", t("contact.invalidEmail"));
      return null;
    }

    if (!token) {
      notify("error", t("contact.untickedRecaptcha"));
      return null;
    }

    // Validation before sending email
    try {
      setLoading(true);
      await axios.post("/api/mail", formData);
      setLoading(false);
      notify("success", t("contact.emailSent"));
    } catch (err) {
      console.log(err);
      setLoading(false);
      notify("error", t("contact.error"));
    }

    // Resetting form & reCAPTCHA
    e.target.reset();
    window.grecaptcha.reset();
  };

  return (
    <section className="contact-section">
      <a
        id="contact"
        className="anchor"
        href="https://github.com/YHADJRABIA/"
      ></a>
      <div className="section-text-container">
        <h2>{t("contact.title")}</h2>
        <p className="contact-content">{t("contact.content")}</p>
      </div>

      <form
        method="post"
        onSubmit={handleOnSubmit}
        noValidate
        className="form_card"
      >
        <div className="form-field">
          <input placeholder={t("contact.johnSmith")} type="text" name="name" />
          <label htmlFor="name">{t("contact.name")}</label>
        </div>
        <div className="form-field">
          <input placeholder="email@domain.com" type="email" name="email" />
          <label htmlFor="email">{t("contact.email")}</label>
        </div>
        <div className="form-field">
          <textarea
            placeholder={t("contact.placeholder")}
            name="message"
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT}
          ref={reCaptchaRef}
          onChange={(token) => setToken(token)}
          onExpired={() => setToken(null)}
        />
        <p>
          <button className="btn btn-primary" /* disabled={disabled} */>
            {!loading ? t("contact.submit") : <Animation />}
          </button>
        </p>
      </form>
    </section>
  );
};

export default Contact;