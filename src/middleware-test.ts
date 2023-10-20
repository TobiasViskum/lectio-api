import { getLoginForm } from "@/lib/getPage/getForm/login-form";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { standardSchema } from "@/lib/standard-schema";
import { load } from "cheerio";
import { NextRequest, NextResponse } from "next/server";
import makeFetchCookie from "fetch-cookie";

export async function middlewaretest(req: NextRequest) {
  const baseUrl = "https://www.lectio.dk/lectio";

  if (req.cookies.get("x-lectiogsc") && req.cookies.get("x-ASP.NET_SessionId")) {
    return NextResponse.next();
  }
  const store = new makeFetchCookie.toughCookie.CookieJar();
  const params = getSearchParamsObject(req);
  const fetchCookie = makeFetchCookie(fetch, store);
  try {
    const { username, password, schoolCode } = standardSchema.parse(params);

    const form = await fetchCookie(`${baseUrl}/${schoolCode}/login.aspx`)
      .then(async (res) => {
        const text = await res.text();
        const $ = load(text);
        const __VIEWSTATEX = $("input#__VIEWSTATEX").val();
        const __EVENTVALIDATION = $("input#__EVENTVALIDATION").val();
        const masterFooterValue = $('input[name="masterfootervalue"]').val();

        if (__VIEWSTATEX && __EVENTVALIDATION && masterFooterValue) {
          return getLoginForm({
            __VIEWSTATEX: __VIEWSTATEX,
            __EVENTVALIDATION: __EVENTVALIDATION,
            masterFooterValue: masterFooterValue,
            username: username,
            password: password,
          });
        } else {
          return null;
        }
      })
      .catch((err) => {
        return null;
      });
    const response = NextResponse.next();

    await fetchCookie(`${baseUrl}/${schoolCode}/login.aspx`, {
      method: "POST",
      body: form,
    }).then(async (res) => {
      const cookies = store.toJSON().cookies;

      const lectiogsc = cookies[0];
      const ASP_NET_SessionId = cookies[1];

      if (lectiogsc && ASP_NET_SessionId) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);

        response.cookies.set({
          name: "x-lectiogsc",
          value: lectiogsc.value,
          path: "/",
          expires: date,
        });
        response.cookies.set({
          name: "x-ASP.NET_SessionId",
          value: ASP_NET_SessionId.value,
          path: "/",
          expires: date,
        });
      }
    });

    return response;
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/api/:function*",
};
