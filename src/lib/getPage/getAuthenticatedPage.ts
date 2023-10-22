import { load } from "cheerio";
import { getAxiosInstance } from "../getAxiosInstance";
import { getPageFromMap } from "./page-map";
import { getSchool } from "../scrapeFunctions";

type Props = {
  page?: Pages;
  specificPage?: string;
  lectioCookies: string;
  schoolCode: string;
};

export async function getAuthenticatedPage({
  page,
  specificPage,
  lectioCookies,
  schoolCode,
}: Props) {
  const baseUrl = "https://www.lectio.dk/lectio";
  let targetPage = "";

  if (page) {
    targetPage = getPageFromMap({
      page: page,
    });
  } else if (specificPage) {
    targetPage = specificPage;
  }

  const { client } = getAxiosInstance();

  const targetPageContent = await client
    .get(`${baseUrl}/${schoolCode}/${targetPage}`, {
      headers: { "Cookie": lectioCookies },
    })
    .then(async (res) => {
      if (res.data.includes("Log ind")) {
        return "Not authenticated";
      } else if (res.data.includes("Der opstod en ukendt fejl")) {
        const school = await getSchool({ schoolCode: schoolCode });
        if (school === null) return "Invalid school";
        return null;
      } else {
        return { $: load(res.data), client: client };
      }
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.includes("Server Error")) {
        return "Forbidden access";
      }

      return null;
    });

  return targetPageContent;
}
