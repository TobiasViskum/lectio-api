import puppeteer from "puppeteer";

type Props = { targetPage: string };

export async function getAuthenticatedPage({ username, password, schoolCode, targetPage }: StandardProps & Props) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.lectio.dk/lectio/${schoolCode}/login.aspx`);
    await page.type("#username", username);
    await page.type("#password", password);
    await Promise.all([page.click("#m_Content_submitbtn2"), page.waitForNavigation()]);

    try {
      const title = await page.$eval("div#MainTitle", (elem) => {
        return elem.textContent;
      });
      console.log(title);

      if (title) {
        await page.browser().close();
        return "Not authenticated";
      } else {
        await page.goto(targetPage, {
          waitUntil: "domcontentloaded",
        });
        return page;
      }
    } catch {
      await page.goto(targetPage, {
        waitUntil: "domcontentloaded",
      });
      return page;
    }
  } catch {
    await page.browser().close();
    return "Error";
  }
}
