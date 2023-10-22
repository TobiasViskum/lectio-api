import { getLoginForm } from "@/lib/getPage/getForm/login-form";
import { getSearchParamsObject } from "@/lib/getSearchParamsObject";
import { authSchema, standardSchema } from "@/lib/standard-schema";
import { load } from "cheerio";
import { NextRequest, NextResponse } from "next/server";
import makeFetchCookie from "fetch-cookie";

export const config = {
  matcher: "/api/:function*",
};

export async function middleware(req: NextRequest) {
  const baseUrl = "https://www.lectio.dk/lectio";

  const searchParams = req.nextUrl.searchParams;
  const lectioCookies = searchParams.get("lectioCookies");

  if (req.url.includes("get-is-authenticated")) {
    return NextResponse.next();
  }

  if (lectioCookies) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-lectio-cookies", lectioCookies);

    return NextResponse.next({ headers: requestHeaders });
  }

  /*
  The code below just gets the new lectioCookies and returns
  the cookie to the API-function in the header "x-lectio-cookies"
  
  If it fails it will just forward the request to the API-function
  which will return the proper response based on what went wrong
  */
  const store = new makeFetchCookie.toughCookie.CookieJar();
  const params = getSearchParamsObject(req);
  const fetchCookie = makeFetchCookie(fetch, store);

  try {
    const { username, password, schoolCode } = authSchema.parse(params);

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

    const requestHeaders = new Headers(req.headers);

    if (form === null) {
      return NextResponse.next();
    }

    await fetchCookie(`${baseUrl}/${schoolCode}/login.aspx`, {
      method: "POST",
      body: form,
    }).then(async (res) => {
      const cookies = store.getCookiesSync("https://www.lectio.dk");

      const lectiogsc = cookies[0];
      const ASP_NET_SessionId = cookies[1];

      if (lectiogsc && ASP_NET_SessionId) {
        let lectioCookies = "";
        lectioCookies += `ASP.NET_SessionId=${ASP_NET_SessionId.value};`;
        lectioCookies += `lectiogsc=${lectiogsc.value};`;

        requestHeaders.set("x-lectio-cookies", lectioCookies);
      }
    });

    const response = NextResponse.next({
      headers: requestHeaders,
    });
    return response;
  } catch (err) {
    return NextResponse.next();
  }
}

/*

  If it contains the cookies do NextResponse.next() as above
  Afterwards in the getAuthenticatedPage function, then if it uses the cookies,
  then it should do the following if it's still "Log ind":
  - Make a request to get the new cookies
  - Then send the new cookies back in the response
  - In every single response the cookies that were being used should be sent back
  and in lectio-viskum.vercel.app the cookies should be updated ONLY if they are different,
  through a Server Action
  
  */
