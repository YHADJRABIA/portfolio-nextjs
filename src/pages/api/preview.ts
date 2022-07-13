import { NextApiRequest, NextApiResponse } from "next"

// Endpoint to allow preview of a draft from the used headless CMS. The preview is rendered at request time instead of build time
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({})
  res.writeHead(307, { Location: "/" })
  res.end()
}
