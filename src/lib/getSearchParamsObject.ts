import { NextRequest } from "next/server";

export function getSearchParamsObject(request: NextRequest) {
  const params = new URLSearchParams(request.nextUrl.search);
  let obj: { [key: string]: string } = {};
  for (let [key, value] of params) {
    obj[key] = value;
  }

  return obj;
}
