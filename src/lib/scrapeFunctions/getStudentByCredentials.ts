import { getAuthenticatedPage } from "../getAuthenticatedPage";

export async function getStudentByCredentials({ username, password, schoolCode }: StandardProps) {
  const page = await getAuthenticatedPage({
    username: username,
    password: password,
    schoolCode: schoolCode,
    targetPage: `https://www.lectio.dk/lectio/${schoolCode}/DokumentOversigt.aspx?folderid=S53701992282__`,
  });

  if (page === "Error") return null;
  if (page === "Not authenticated") return page;

  try {
    const imgHref = await page.$eval("img#s_m_HeaderContent_picctrlthumbimage", (elem) => {
      return [elem.src, "&fullsize=1"].join("") || "";
    });
    const studentInformation = await page.$eval("div#s_m_HeaderContent_MainTitle > span.ls-hidden-smallscreen", (elem) => {
      let name = "";
      let studentClass = "";

      const text = elem.innerHTML;
      const nameMatch = text.match(/Eleven ([a-z0-9 ]+), /i);
      const classMatch = text.match(/Eleven [a-z0-9 ]+, ([a-z0-9-]+) /i);

      if (nameMatch) {
        name = nameMatch[1];
      }
      if (classMatch) {
        studentClass = classMatch[1];
      }

      return {
        name: name,
        studentClass: studentClass,
      };
    });

    await page.goto(imgHref);

    let imgEncoded = "";
    const img = await page.$("img");
    if (img) {
      imgEncoded = (await img.screenshot({ encoding: "base64" })) as string;
    }

    await page.browser().close();
    return {
      name: studentInformation.name,
      studentClass: studentInformation.studentClass,
      img: imgEncoded,
    };
  } catch {
    await page.browser().close();
    return null;
  }
}
