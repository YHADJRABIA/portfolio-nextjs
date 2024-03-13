type Category =
  | "frontend"
  | "backend"
  | "api"
  | "architecture"
  | "ide"
  | "testing"
  | "ux-ui"
  | "database"
  | "version-control"
  | "project-management"
  | "devops"
  | "electronics"

export type Skill = {
  name: string
  slug: string
  icon: string
  category: Category | Category[]
}
