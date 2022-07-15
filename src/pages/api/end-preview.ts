import { NextApiResponse } from "next"

export default function handler(res: NextApiResponse) {
  res.clearPreviewData() // Clears browser's cookies to disable preview mode.
  res.end("Preview mode disabled")
}
