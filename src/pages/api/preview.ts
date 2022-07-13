import { NextApiRequest, NextApiResponse } from "next"

// Endpoint to enable preview mode. Useful to preview a headless CMS draft. The preview is rendered at request time instead of build time
// The preview mode will remain enabled unless another endpoint to disable it is called
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({}) // Sets browser's cookie to allow preview mode. Any request containing this cookie will be rendered in preview mode
  res.writeHead(307, { Location: "/" })
  res.end()
}
