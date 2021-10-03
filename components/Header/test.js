const locales = ["en", "fr", "sv", "ru"];

const options = [
  { value: "", label: "", flag: "", title: "" },
  { value: "", label: "", flag: "", title: "" },
  { value: "", label: "", flag: "", title: "" },
  { value: "", label: "", flag: "", title: "" },
];

locales.forEach((locale, id) => {
  options[id].value = locale;
  options[id].label = locale.toLocaleUpperCase();
  options[id].flag = locale === "sv" ? "se" : locale === "en" ? "gb" : locale;
  options[id].title = "";
});

console.log(options);
