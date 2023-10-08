import { getAuthenticatedPage } from "../getAuthenticatedPage";

export async function getAllTeachers({ username, password, schoolCode }: StandardProps) {
  const page = await getAuthenticatedPage({
    username: username,
    password: password,
    targetPage: `https://www.lectio.dk/lectio/${schoolCode}/FindSkema.aspx?type=laerer`,
    schoolCode: schoolCode,
  });

  console.log(page);

  if (page === "Error") return null;
  if (page === "Not authenticated") return page;

  try {
    const teachers = await page.$$eval("[data-lectiocontextcard]", (elem) =>
      elem.map((item) => {
        const name = item.innerHTML.split(" (")[0];
        const initials = item.innerHTML.split(" (")[1].replace(")", "");
        const href = ["https://lectio.dk", item.getAttribute("href")].join("") as string;
        const teacherId = href.split("laererid=")[1];

        return { name: name, initials: initials, teacherId: teacherId, href: href, img: "" };
      })
    );

    await page.browser().close();

    if (teachers.length === 0) {
      return "No data";
    }

    return teachers;
  } catch {
    await page.browser().close();
    return null;
  }
}
