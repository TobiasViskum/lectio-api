import { NextResponse } from "next/server";

export function invalidParameters() {
  return NextResponse.json({ status: "error", message: "Invalid parameters" });
}

export function successNoData(message: string) {
  return NextResponse.json({ status: "success", message: message, data: null });
}

export function failedToGetData() {
  return NextResponse.json({ status: "error", message: "An error happened when trying to get data. Make sure to provide the correct username, password and schoolCode" });
}

type DefaultObject = { [key: string | number]: any };
export function successRequest(data: DefaultObject | DefaultObject[]) {
  return NextResponse.json({ status: "success", message: "Successfully retrieved data", data: data });
}
