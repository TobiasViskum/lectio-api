import { NextResponse } from "next/server";

export function invalidParameters() {
  return NextResponse.json({ status: "error", message: "Invalid parameters" });
}

export function schoolSuccessNoData() {
  return NextResponse.json({
    status: "success",
    message: "There was no data",
    data: null,
  });
}

export function successNoData(lectioCookies: string) {
  return NextResponse.json({
    status: "success",
    message: "There was no data",
    data: null,
    lectioCookies: lectioCookies,
  });
}

export function errorForbiddenAccess() {
  return NextResponse.json({
    status: "error",
    message:
      "There was too many requests to Lectio, so Lectio has blocked this user for a few minutes",
  });
}

export function errorNotAuthenticated() {
  return NextResponse.json({ status: "error", message: "User not authenticated" });
}

export function errorSchoolInvalid() {
  return NextResponse.json({ status: "error", message: "School doesn't exist" });
}

export function failedToGetData() {
  return NextResponse.json({
    status: "error",
    message: "An error happened when trying to get data.",
  });
}

type DefaultObject = { [key: string | number]: any };
export function successRequest(data: DefaultObject | DefaultObject[], lectioCookies: string) {
  const response = NextResponse.json({
    status: "success",
    message: "Successfully retrieved data",
    data: data,
    lectioCookies: lectioCookies,
  });

  return response;
}

export function schoolSuccessRequest(data: DefaultObject | DefaultObject[]) {
  const response = NextResponse.json({
    status: "success",
    message: "Successfully retrieved data",
    data: data,
  });

  return response;
}
