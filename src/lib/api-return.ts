import { NextResponse } from "next/server";

export function invalidParameters() {
  return NextResponse.json({ status: "error", message: "Invalid parameters" });
}

export function successNoData() {
  return NextResponse.json({ status: "success", message: "There was no data", data: null });
}

export function successNotAuthenticated() {
  return NextResponse.json({ status: "error", message: "User not authenticated" });
}

export function failedToGetData() {
  return NextResponse.json({ status: "error", message: "An error happened when trying to get data." });
}

type DefaultObject = { [key: string | number]: any };
export function successRequest(data: DefaultObject | DefaultObject[]) {
  return NextResponse.json({ status: "success", message: "Successfully retrieved data", data: data });
}
