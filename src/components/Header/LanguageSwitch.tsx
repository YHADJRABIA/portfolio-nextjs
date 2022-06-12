import { useRouter } from "next/router"
import Image from "next/image"

import useTranslation from "next-translate/useTranslation" // Translation

import Select, {
  components,
  CSSObjectWithLabel,
  StylesConfig,
} from "react-select"

type FlagProps = {
  title?: string
  flag?: string
}

interface PropTypes {
  setToggled: (toggle: boolean) => void
}

const Flag = ({ title, flag }: FlagProps) => {
  return (
    <Image
      className="flag-img"
      alt={title}
      title={title}
      src={`https://flagcdn.com/w40/${flag}.png`}
      width={35}
      height={25}
      priority
    />
  )
}

const { Option } = components

const CustomSelectOption = (props: any) => (
  <Option {...props}>
    <Flag title={props.data.title} flag={props.data.flag} />
    <small title={props.data.title}>{props.data.label}</small>
  </Option>
)

const CustomSelectValue = ({ data }: any) => (
  <Flag title={data.title} flag={data.flag} />
)

const customStyles: StylesConfig = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: "all 300ms",
  }),

  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    color: "white",
  }),

  singleValue: (provided: CSSObjectWithLabel, { isDisabled }) => ({
    ...provided,
    opacity: isDisabled ? 0.5 : 1,
    transition: "opacity 300ms",
    color: "white",
  }),

  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    border: "none",
    padding: "2px 10px",
  }),

  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    width: "0",
  }),

  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "gray",
    transition: "color 300ms",
    "&:hover": {
      color: "white",
    },
  }),

  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    marginTop: "0",
    zIndex: 2,
  }),
  menuList: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: "2px",
    height: "120px",
    margin: "0",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  }),
  option: (provided: CSSObjectWithLabel, { isSelected }) => ({
    ...provided,
    borderBottom: "1px solid white",
    color: isSelected ? "white" : "black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "3px 2px",
    width: "100%",
  }),
}

const LanguageSwitch = ({ setToggled }: PropTypes) => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const { locale, pathname, locales, asPath } = router

  const options = locales?.map(locale => {
    return {
      value: locale,
      label: locale.toLocaleUpperCase(),
      flag: locale === "sv" ? "se" : locale === "en" ? "gb" : locale,
      title: t(`languages.${locale}`),
    }
  })

  const currentFlag = options?.filter(option => option.value === locale)[0]

  const changeLanguage = (e: { value: string }) => {
    // LocalStorage
    setToggled(false)
    const locale = e.value
    router.push(pathname, asPath, { locale, scroll: false })
  }

  return (
    <Select
      instanceId="long-value-select"
      className="language-container"
      options={options?.filter(option => option.value !== locale)} // Filters out current flag
      defaultValue={locale}
      placeholder={<Flag flag={currentFlag?.flag} title={currentFlag?.title} />}
      onChange={changeLanguage as any}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
      }}
      isSearchable={false}
      styles={customStyles}
    />
  )
}

export default LanguageSwitch
