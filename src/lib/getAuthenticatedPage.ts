import puppeteer from "puppeteer";

type Props = { targetPage: string };

export async function getAuthenticatedPage({ username, password, targetPage }: StandardProps & Props) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.lectio.dk/lectio/243/login.aspx");
  await page.type("#username", username);
  await page.type("#password", password);
  await page.click("#m_Content_submitbtn2");
  await page.goto(targetPage, {
    waitUntil: "domcontentloaded",
  });
  return page;
}
