import { consentRegion } from "@/lib/consent-region.mjs";
export const dynamic = "force-dynamic";
export function GET(request: Request) { return consentRegion(request, process.env.VERCEL === "1"); }
export const HEAD = GET;
