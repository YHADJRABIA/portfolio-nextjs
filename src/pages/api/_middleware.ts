import { NextRequest, NextResponse } from "next/server"

// Triggers up following every request
export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const time = Date.now()
  const timeStr = new Date(time).toLocaleDateString()

  const logData = await {
    time: timeStr,
    url: req.url,
    ip: req.ip,
    ua: req.ua,
    country: req.geo?.country,
    city: req.geo?.city,
  }
  return res
}
