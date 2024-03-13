import { Skill } from "@/types/models/skill"

const skills = [
  {
    name: "NextJS",
    slug: "nextjs",
    icon: "devicon-nextjs-plain colored",
    category: ["frontend", "backend"],
  },
  {
    name: "Gatsby",
    slug: "gatsbyjs",
    icon: "devicon-gatsby-plain",
    category: "frontend",
  },
  {
    name: "ReactJS",
    slug: "reactjs",
    icon: "devicon-react-original",
    category: "frontend",
  },
  {
    name: "Redux",
    slug: "redux",
    icon: "devicon-redux-original",
    category: "frontend",
  },
  {
    name: "HTML",
    slug: "html",
    icon: "devicon-html5-plain",
    category: "frontend",
  },
  {
    name: "CSS",
    slug: "css",
    icon: "devicon-css3-plain",
    category: "frontend",
  },
  {
    name: "Sass",
    slug: "sass",
    icon: "devicon-sass-original",
    category: "frontend",
  },
  {
    name: "JavaScript",
    slug: "js",
    icon: "devicon-javascript-plain",
    category: ["frontend", "backend"],
  },
  {
    name: "TypeScript",
    slug: "ts",
    icon: "devicon-typescript-plain",
    category: ["frontend", "backend"],
  },
  {
    name: "Node.js",
    slug: "nodejs",
    icon: "fab fa-node",
    category: "backend",
  },
  {
    name: "ExpressJS",
    slug: "expressjs",
    icon: "devicon-express-original-wordmark",
    category: ["api", "backend"],
  },
  {
    name: "Jamstack",
    slug: "jamstack",
    icon: "devicon-jamstack-original",
    category: "architecture",
  },
  {
    name: "Algolia",
    slug: "algolia",
    icon: "fab fa-algolia",
    category: "api",
  },
  {
    name: "GraphQL",
    slug: "graphql",
    icon: "devicon-graphql-plain",
    category: "api",
  },
  {
    name: "Postman",
    slug: "postman",
    icon: "devicon-postman-plain",
    category: "api",
  },
  {
    name: "npm",
    slug: "npm",
    icon: "devicon-npm-original-wordmark",
    category: "ide",
  },
  {
    name: "Tailwind",
    slug: "tailwind",
    icon: "devicon-tailwindcss-original",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    slug: "bootstrap",
    icon: "devicon-bootstrap-plain",
    category: "frontend",
  },
  {
    name: "jQuery",
    slug: "jquery",
    icon: "devicon-jquery-plain",
    category: "frontend",
  },
  {
    name: "Jest",
    slug: "jest",
    icon: "devicon-jest-plain",
    category: "testing",
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    icon: "devicon-mongodb-plain",
    category: ["database", "backend"],
  },
  {
    name: "MySQL",
    slug: "mysql",
    icon: "devicon-mysql-plain",
    category: ["database", "backend"],
  },
  { name: "PHP", slug: "php", icon: "devicon-php-plain", category: "backend" },
  {
    name: "Python",
    slug: "python",
    icon: "devicon-python-plain",
    category: "backend",
  },
  {
    name: "C++",
    slug: "cpp",
    icon: "devicon-cplusplus-plain",
    category: "backend",
  },
  {
    name: "Figma",
    slug: "figma",
    icon: "devicon-figma-plain",
    category: ["ux-ui", "frontend"],
  },
  {
    name: "git",
    slug: "git",
    icon: "devicon-git-plain",
    category: "version-control",
  },
  {
    name: "GitHub",
    slug: "github",
    icon: "devicon-github-plain",
    category: ["project-management", "devops", "version-control"],
  },
  {
    name: "Jira",
    slug: "jira",
    icon: "devicon-jira-plain",
    category: "project-management",
  },
  {
    name: "Trello",
    slug: "trello",
    icon: "devicon-trello-plain",
    category: "project-management",
  },
  {
    name: "Google Cloud",
    slug: "google-cloud",
    icon: "devicon-googlecloud-plain",
    category: "devops",
  },
  {
    name: "Heroku",
    slug: "heroku",
    icon: "devicon-heroku-plain",
    category: "devops",
  },
  {
    name: "VS Code",
    slug: "vscode",
    icon: "devicon-vscode-plain",
    category: "ide",
  },
  {
    name: "Embedded C",
    slug: "embedded-c",
    icon: "devicon-embeddedc-plain",
    category: "electronics",
  },
  {
    name: "Arduino",
    slug: "arduino",
    icon: "devicon-arduino-plain",
    category: "electronics",
  },
  {
    name: "VHDL",
    slug: "vhdl",
    icon: "fas fa-microchip",
    category: "electronics",
  },
  {
    name: "MATLAB",
    slug: "matlab",
    icon: "devicon-matlab-plain",
    category: "electronics",
  },
  {
    name: "LabView",
    slug: "labview",
    icon: "devicon-labview-plain",
    category: "electronics",
  },
]

export const getAllSkills = (): Skill[] => skills

export const getIconBySlug = (slug: string) =>
  skills.find(skill => skill.slug === slug)
