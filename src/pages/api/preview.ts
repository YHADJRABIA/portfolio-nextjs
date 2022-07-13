import { NextApiRequest, NextApiResponse } from "next"

// Endpoint to allow preview of a draft from the used headless CMS. The preview is rendered at request time instead of build time
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({}) // Sets browser's cookie to allow preview mode. Any request containing this cookie will be rendered in preview mode
  res.writeHead(307, { Location: "/" })
  res.end()
}
