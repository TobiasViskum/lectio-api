import { getBasicPage } from "../getBasicPage";

export async function getIsAuthenticated({ username, password, schoolCode }: StandardProps) {
  const page = await getBasicPage({ targetPage: `https://www.lectio.dk/lectio/${schoolCode}/login.aspx` });

  try {
    await page.type("#username", username);
    await page.type("#password", password);
    await Promise.all([page.click("#m_Content_submitbtn2"), page.waitForNavigation()]);

    try {
      const title = await page.$eval("div#MainTitle", (elem) => {
        return elem.textContent;
      });

      if (title) {
        await page.browser().close();
        return { isAuthenticated: false };
      } else {
        await page.browser().close();
        return { isAuthenticated: true };
      }
    } catch {
      await page.browser().close();
      return { isAuthenticated: true };
    }
  } catch {
    await page.browser().close();
    return null;
  }
}
