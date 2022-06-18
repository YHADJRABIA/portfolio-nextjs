import { Project } from "@/types/projects"

const projects = [
  {
    name: "Chefclub.tv",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1655048429/projects/Chefclub_kcmzb2.png",
    description:
      "Jamstack multilingual website using Gatsby production framework, with emphasis on SEO & performance.",
    url: "https://chefclub.tv",
    tags: [
      "gatsbyjs",
      "reactjs",
      "ts",
      "redux",
      "graphql",
      "algolia",
      "jamstack",
      "prismic-cms",
      "jest",
      "postman",
      "jira",
      "git",
      "github",
      "figma",
    ],
    slug: "chefclub-tv",
  },
  {
    name: "Portfolio",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633021468/projects/NextTS_ro8ecm.png",
    description:
      "Current website with lazy-loading images, internationalisation, SEO emphasis and end-to-end testing with Cypress.",
    repo: "https://github.com/YHADJRABIA/portfolio-nextjs",
    tags: [
      "nextjs",
      "reactjs",
      "nodejs",
      "ts",
      "regex",
      "recaptcha",
      "jamstack",
      "axios",
      "i18n",
      "cloudinary",
      "cypress",
      "sass",
    ],
    slug: "portfolio",
  },
  {
    name: "Movies app",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633913956/projects/movies_t2u82l.png",
    url: "https://yhadjrabia.github.io/movies-app/",
    description:
      "App displaying a list of movies that may be liked, disliked, removed and filtered by type. A pagination system enables to limit the amount of movies per page.",
    repo: "https://github.com/YHADJRABIA/movies-app",
    tags: ["reactjs", "redux", "sass"],
    slug: "movies-app",
  },
  {
    name: "E-commerce",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633022248/projects/ecommerce_po1c6d.png",
    url: "https://yhadjrabia.github.io/ecommerce/",
    description:
      "Fully responsive mobile-first bilingual e-commerce app consuming API data. Using Redux Toolkit for state management and localStorage for saving preferences.",
    repo: "https://github.com/YHADJRABIA/ecommerce",
    tags: [
      "reactjs",
      "axios",
      "i18n",
      "redux",
      "paypal",
      "rest-api",
      "sass",
      "cypress",
    ],
    slug: "e-commerce",
  },
  {
    name: "Authentication app",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1632802386/projects/register_ijaltx.png",
    url: "https://yhadjrabia-app.herokuapp.com/register",
    description:
      "Fullstack MERN app with Register/Login/Dashboard features, using JWTs, form validators and cloud services.",
    repo: "https://github.com/YHADJRABIA/MERN-app",
    tags: [
      "reactjs",
      "redux",
      "nodejs",
      "expressjs",
      "mongodb",
      "jwt",
      "cors",
      "oauth2",
    ],
    slug: "authentication-app",
  },
  {
    name: "Restaurant",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1632804438/projects/restaurant_yacfum.png",
    url: "http://yhr-3wa-pa155.atwebpages.com/",
    description:
      "Fullstack app with role-based system, implementing CRUD methods.",
    repo: "https://github.com/YHADJRABIA/restaurant",
    tags: ["html", "css", "js", "jquery", "php", "mysql", "ajax"],
    slug: "restaurant",
  },
  {
    name: "SWRASS",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633180123/projects/SWAPI_nqhrw3.png",
    description:
      "Fullstack app with authentication system to access and filter Star Wars API's data through a proxy API.",
    repo: "https://github.com/YHADJRABIA/SWRASS",
    tags: ["reactjs", "nodejs", "hapi", "rest-api", "sass"],
    slug: "SWRASS",
  },
  {
    name: "Electronics",
    img: "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633020134/projects/Integrated_circuit_on_microchip_mi9ces.jpg",
    url: "https://drive.google.com/drive/u/1/folders/17DYOO36GUu3I_s9U8Zeq2ok5-yVR5XoT",
    description: "Various Electrical Engeneering projects I have worked on.",
    tags: ["vhdl", "cadence", "eagle-pcb", "arduino", "matlab"],
    slug: "electronics",
  },
]

export const getAllProjects = (): Project[] => projects

export const getAllSlugs = () => projects.map(project => project.slug)

export const getProjectBySlug = (slug: string) =>
  projects.find(project => project.slug === slug)
