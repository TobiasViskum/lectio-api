import { load } from "cheerio";
import { getAuthenticatedPage } from ".";
import { getAssignmentsForm } from "./getForm/assignment-form";

type Props = StandardProps2;

export async function getAssignmentsPage({ lectioCookies, schoolCode }: StandardProps) {
  const res = await getAuthenticatedPage({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    page: "assignments",
  });

  if (res === null) return res;
  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;
  if (res === "Invalid school") return res;
  const $ = res.$;
  const client = res.client;

  const __VIEWSTATEX = $("input#__VIEWSTATEX").val();
  const __EVENTVALIDATION = $("input#__EVENTVALIDATION").val();
  const masterFooterValue = $('input[name="masterfootervalue"]').val();

  if (__VIEWSTATEX && __EVENTVALIDATION && masterFooterValue) {
    const form = getAssignmentsForm({
      __VIEWSTATEX: __VIEWSTATEX,
      __EVENTVALIDATION: __EVENTVALIDATION,
      masterFooterValue: masterFooterValue,
    });

    const pageContent = await client
      .post("https://www.lectio.dk/lectio/243/OpgaverElev.aspx", form, {
        headers: { "Cookie": lectioCookies },
      })
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
    return pageContent;
  } else {
    return null;
  }
}
