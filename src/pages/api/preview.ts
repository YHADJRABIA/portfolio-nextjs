import { APIResponse } from "@/types/api"
import { NextApiRequest, NextApiResponse } from "next"

// Endpoint to enable preview mode. Useful to preview a headless CMS draft. The preview is rendered at request time instead of build time
// The preview mode will remain enabled unless another endpoint to disable it is called
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.query.mode === "disable") {
    res.clearPreviewData() // Clears browser's cookies to disable preview mode.
    res.end("Preview mode disabled")
  }
  if (req.query.secret !== process.env.NEXT_DATOCMS_DRAFT_TOKEN) {
    // Token is used to restrict access to CMS's draft. This should only be known to this API route and the CMS
    return res.status(401).json({ status: "error", msg: "Invalid token" })
  }
  res.setPreviewData({}) // Sets browser's cookie to enable preview mode. Any request containing this cookie will be rendered in preview mode
  res.end("Preview mode enabled")
}
