import { load } from "cheerio";
import { getAxiosInstance } from "../getAxiosInstance";
import { getLoginForm } from "./getForm/login-form";
import { getSchool } from "../scrapeFunctions";

export async function getRawAuthenticatedPage({ username, password, schoolCode }: StandardProps2) {
  const baseUrl = "https://www.lectio.dk/lectio";
  const { client, cookieJar } = getAxiosInstance();

  const form = await client
    .get(`${baseUrl}/${schoolCode}/login.aspx`)
    .then(async (res) => {
      const $ = load(res.data);
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
        if (res.data.includes("Der opstod en ukendt fejl")) {
          const school = await getSchool({ schoolCode: schoolCode });
          if (school === null) return "Invalid school";
        }

        return null;
      }
    })
    .catch(async (err) => {
      const school = await getSchool({ schoolCode: schoolCode });
      if (school === null) return "Invalid school";

      return null;
    });

  if (form) {
    const targetPageContent = await client
      .post(`${baseUrl}/login.aspx?prevurl=forside.aspx`, form)
      .then(async (res) => {
        if (res.data.includes("Log ind")) {
          return "Not authenticated";
        } else if (res.data.includes("Der opstod en ukendt fejl")) {
          const school = await getSchool({ schoolCode: schoolCode });

          if (school === null) return "Invalid school";
          return null;
        } else {
          const cookies = cookieJar.getCookiesSync("https://www.lectio.dk");

          const lectiogsc = cookies[0];
          const ASP_NET_SessionId = cookies[1];
          let lectioCookies = "";
          if (lectiogsc && ASP_NET_SessionId) {
            lectioCookies += `ASP.NET_SessionId=${ASP_NET_SessionId.value};`;
            lectioCookies += `lectiogsc=${lectiogsc.value};`;
          }
          return lectioCookies;
        }
      })
      .catch((err) => {
        return null;
      });
    return targetPageContent;
  } else {
    return null;
  }
}
