import { NextRequest, NextResponse, userAgent } from "next/server"

// Runs on edge runtime and gets triggered following every request
export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const time = Date.now()
  const timeStr = new Date(time).toLocaleDateString()
  const { device } = userAgent(req)

  const logData = await {
    time: timeStr,
    url: req.url,
    ip: req.ip,
    ua: device,
    country: req.geo?.country,
    city: req.geo?.city,
  }
  return res
}
