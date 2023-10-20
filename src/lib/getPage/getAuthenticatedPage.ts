import { load } from "cheerio";
import { getAxiosInstance } from "../getAxiosInstance";
import { getPageFromMap } from "./page-map";
import { getLoginForm } from "./getForm/login-form";
import { getSchool } from "../scrapeFunctions";

type Props = {
  page?: Pages;
  specificPage?: string;
  cookies?: { name: string; value: string }[];
} & StandardProps;

export async function getAuthenticatedPage({
  page,
  specificPage,
  username,
  password,
  schoolCode,
  cookies,
}: Props) {
  const baseUrl = "https://www.lectio.dk/lectio";
  let targetPage = "";

  if (page) {
    targetPage = getPageFromMap({
      page: page,
    });
  } else if (specificPage) {
    targetPage = encodeURIComponent(specificPage);
  }

  const school = await getSchool({ schoolCode });

  if (school === null) return "Invalid school";
  if (school === "No data") return school;

  if (cookies && cookies.length > 0) {
  }

  const client = getAxiosInstance();
  const form = await client
    .get(`${baseUrl}/${schoolCode}/login.aspx`)
    .then((res) => {
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
        return null;
      }
    })
    .catch((err) => {
      return null;
    });

  if (form) {
    const targetPageContent = await client
      .post(`${baseUrl}/login.aspx?prevurl=${targetPage}`, form)
      .then((res) => {
        if (res.data.includes("Log ind")) {
          return "Not authenticated";
        } else if (res.data.includes("Der opstod en ukendt fejl")) {
          return null;
        } else {
          return { $: load(res.data), client: client };
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
