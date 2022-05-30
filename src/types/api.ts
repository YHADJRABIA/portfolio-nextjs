export type APIStatus = "success" | "error"

export type EmailAPIResponse = { status: APIStatus; msg: string }

export type Skill = {
  name: string;
  icon: string;
  category: string;
}
