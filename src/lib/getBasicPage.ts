import puppeteer from "puppeteer";

type Props = { targetPage: string };

export async function getBasicPage({ targetPage }: Props) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(targetPage, {
    waitUntil: "domcontentloaded",
  });
  return page;
}
