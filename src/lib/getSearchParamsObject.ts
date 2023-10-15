import { NextRequest } from "next/server";

export function getSearchParamsObject(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  let obj: { [key: string]: string } = {};
  for (let [key, value] of searchParams) {
    obj[key] = value;
  }

  return obj;
}
