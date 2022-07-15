import { APIResponse } from "@/types/api"
import { NextApiRequest, NextApiResponse } from "next"

// Endpoint to enable/disable preview mode. Useful to preview a headless CMS draft. The preview is rendered at request time instead of build time
// The preview mode will remain enabled unless the endpoint is called with a `?disable=(anything-here)` query parameter
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  // Disable mode
  if (req.query.disable) {
    res.clearPreviewData() // Clears browser's cookies to disable preview mode.
    res.end("Preview mode disabled")
  }

  // Enable mode
  if (req.query.secret !== process.env.NEXT_DATOCMS_DRAFT_TOKEN) {
    // Token is used to restrict access to CMS's draft. This should only be known to this API route and the CMS
    return res.status(401).json({ status: "error", msg: "Invalid token" })
  }
  res.setPreviewData({}) // Sets browser's cookie to enable preview mode. Any request containing this cookie will be rendered in preview mode
  res.end("Preview mode enabled")
}
