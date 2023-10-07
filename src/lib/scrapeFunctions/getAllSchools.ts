import { getBasicPage } from "../getBasicPage";

export async function getAllSchools(props: any) {
  const page = await getBasicPage({ targetPage: "https://www.lectio.dk/lectio/login_list.aspx" });

  let schools: School[] = [];
  try {
    schools = await page.$$eval("#schoolsdiv > div > a", (elements) => {
      return elements.map((a) => {
        return { schoolCode: a.href.match(/[0-9]+/)![0], name: a.text };
      });
    });
  } catch {
    return null;
  }

  await page.browser().close();

  if (schools.length === 0) return "No data";

  schools = schools.filter((school) => school.name !== "Vis alle skoler");

  return schools;
}