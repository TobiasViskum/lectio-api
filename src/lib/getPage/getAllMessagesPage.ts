import { load } from "cheerio";
import { getAuthenticatedPage } from ".";
import { getAllMessagesForm } from "./getForm/all-messages-form";

export async function getAllMessagesPage({ lectioCookies, schoolCode }: StandardProps) {
  const res = await getAuthenticatedPage({
    lectioCookies: lectioCookies,
    schoolCode: schoolCode,
    page: "messages-all",
  });

  if (res === null) return res;
  if (res === "Not authenticated") return res;
  if (res === "Forbidden access") return res;

  if (res === "Invalid school") return res;

  const $ = res.$;
  const client = res.client;

  const __VIEWSTATEY_KEY = $("input#__VIEWSTATEY_KEY").val();
  const masterFooterValue = $('input[name="masterfootervalue"]').val();

  if (__VIEWSTATEY_KEY && masterFooterValue) {
    const form = getAllMessagesForm({
      __VIEWSTATEY_KEY: __VIEWSTATEY_KEY,
      masterFooterValue: masterFooterValue,
    });

    const pageContent = await client
      .post("https://www.lectio.dk/lectio/243/beskeder2.aspx?selectedfolderid=-30", form)
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
