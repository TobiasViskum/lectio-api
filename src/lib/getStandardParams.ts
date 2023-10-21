import { headers } from "next/headers";
import { NextRequest } from "next/server";

export function getStandardParams(req: NextRequest) {
  const header = headers();
  const lectioCookies = header.get("x-lectio-cookies");
  const searchParams = req.nextUrl.searchParams;
  const schoolCode = searchParams.get("schoolCode");

  return { lectioCookies: lectioCookies, schoolCode: schoolCode };
}
