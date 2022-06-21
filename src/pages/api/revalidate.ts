import { APIResponse } from "@/types/api"
import { NextApiRequest, NextApiResponse } from "next"

type RevalidateAPIResponse = APIResponse & { revalidated?: boolean }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RevalidateAPIResponse>
) {
  // Ensure that request type is POST
  if (req.method !== "POST") {
    return res.status(400).json({ status: "error", msg: "Invalid request." })
  }

  // Check for secret to validate request
  if (req.query.token !== process.env.NEXT_ISR_REVALIDATION_TOKEN) {
    return res.status(401).json({ status: "error", msg: "Invalid token." })
  }

  try {
    const body = req.body

    // Ensure that request body is not empty
    if (!body) {
      return res.status(400).json({ status: "error", msg: "Invalid body." })
    }

    // Get slug to revalidate from body
    const slug = body.slug_to_revalidate

    // TODO: Replace projects to make path more dynamic + update when unstable_revalidate is no longer in beta
    if (slug) {
      await res.unstable_revalidate(`/projects/${slug}`)
      return res.status(200).json({
        status: "success",
        msg: "Successful revalidation!",
        revalidated: true,
      })
    }
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    return res.status(500).json({ status: "error", msg: "Error revalidating." })
  }
}
