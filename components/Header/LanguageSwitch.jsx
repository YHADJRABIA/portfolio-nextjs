import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation"; // Translation

import Select, { components } from "react-select";

const flag = (param) => {
  return (
    <Image
      className="flag-img"
      alt={param.title}
      title={param.title}
      src={`https://flagcdn.com/w40/${param.flag}.png`}
      srcSet={`https://flagcdn.com/w80/${param.flag}.png 2x`}
      width={35}
      height={25}
      priority
    />
  );
};

const { Option } = components;

const CustomSelectOption = (props) => (
  <Option {...props}>
    {flag(props.data)}
    <small title={props.data.title}>{props.data.label}</small>
  </Option>
);

const CustomSelectValue = (props) => <>{flag(props.data)}</>;

const customStyles = {
  control: (provided) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: "all 300ms",
  }),

  placeholder: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    color: "white",
  }),

  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: "opacity 300ms",
    color: "white",
  }),

  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    border: "none",
    padding: "2px 10px",
  }),

  indicatorContainer: (provided, state) => ({
    ...provided,
    backgroundColor: yellow,
  }),

  indicatorSeparator: (provided) => ({ ...provided, width: "0" }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "gray",
    transition: "color 300ms",
    "&:hover": {
      color: "white",
    },
  }),

  menu: (provided) => ({
    ...provided,
    marginTop: "0",
    zIndex: 2,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "2px",
    height: "120px",
    margin: "0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "3px 2px",
    width: "100%",
  }),
};

const LanguageSwitch = ({ setToggled }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname, locales, asPath } = router;

  const options = locales.map((locale) => {
    return {
      value: locale,
      label: locale.toLocaleUpperCase(),
      flag: locale === "sv" ? "se" : locale === "en" ? "gb" : locale,
      title: t(`languages.${locale}`),
    };
  });

  const changeLanguage = (e) => {
    // LocalStorage
    setToggled(false);
    const locale = e.value;
    router.push(pathname, asPath, { locale, scroll: false });
  };

  return (
    <Select
      id="long-value-select"
      instanceId="long-value-select"
      className="language-container"
      options={options.filter((option) => option.value !== locale)} // Filters out current flag
      defaultValue={locale}
      placeholder={flag(options.filter((option) => option.value === locale)[0])}
      onChange={changeLanguage}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
      }}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

export default LanguageSwitch;
