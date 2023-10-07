import puppeteer from "puppeteer";

export async function getSchools() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.lectio.dk/lectio/login_list.aspx");

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
