import type { NextApiRequest, NextApiResponse } from "next"

import { isEmpty, isEmail, validateHuman } from "@/utilities/formValidator" // Validators
import { APIResponse } from "@/types/api"
import { isProduction } from "@/utilities/general"
import { acknowledgeReceipt, sendEmail } from "@/utilities/mailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  const { lang, name, email, message, token } = req.body
  const human = await validateHuman(token)

  // Empty fields
  if (isEmpty(name) || isEmpty(email) || isEmpty(message))
    return res
      .status(400)
      .json({ status: "error", msg: "Please fill out all fields." })

  // E-mail format
  if (!isEmail(email))
    return res.status(401).json({ status: "error", msg: "Invalid e-mail." })

  // Unticked reCAPTCHA
  if (!token)
    return res
      .status(400)
      .json({ status: "error", msg: "Validate reCAPTCHA first." })

  // Failing reCAPTCHA's test
  if (!human)
    return res
      .status(401)
      .json({ status: "error", msg: "Failed reCAPTCHA validation." })

  try {
    // Sending e-mail & acknowledging receipt (only in production)
    if (isProduction)
      await Promise.all([
        sendEmail(name, email, message),
        acknowledgeReceipt(name, email, lang),
      ])

    return res.status(200).json({ status: "success", msg: "E-mail sent!" })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ status: "error", msg: "Something went wrong." })
  }
}
